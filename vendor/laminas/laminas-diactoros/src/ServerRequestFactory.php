<?php

declare(strict_types=1);

namespace Laminas\Diactoros;

use Laminas\Diactoros\ServerRequestFilter\FilterServerRequestInterface;
use Laminas\Diactoros\ServerRequestFilter\FilterUsingXForwardedHeaders;
use Psr\Http\Message\ServerRequestFactoryInterface;
use Psr\Http\Message\ServerRequestInterface;

use function array_key_exists;
use function is_callable;

/**
 * Class for marshaling a request object from the current PHP environment.
 *
 * Logic largely refactored from the Laminas Laminas\Http\PhpEnvironment\Request class.
 *
 * @copyright Copyright (c) 2005-2015 Laminas (https://www.zend.com)
 * @license   https://getlaminas.org/license/new-bsd New BSD License
 */
class ServerRequestFactory implements ServerRequestFactoryInterface
{
    /**
     * Function to use to get apache request headers; present only to simplify mocking.
     *
     * @var callable
     */
    private static $apacheRequestHeaders = 'apache_request_headers';

    /**
     * Create a request from the supplied superglobal values.
     *
     * If any argument is not supplied, the corresponding superglobal value will
     * be used.
     *
     * The ServerRequest created is then passed to the fromServer() method in
     * order to marshal the request URI and headers.
     *
     * @see fromServer()
     * @param array $server $_SERVER superglobal
     * @param array $query $_GET superglobal
     * @param array $body $_POST superglobal
     * @param array $cookies $_COOKIE superglobal
     * @param array $files $_FILES superglobal
     * @param null|FilterServerRequestInterface $requestFilter If present, the
     *     generated request will be passed to this instance and the result
     *     returned by this method. When not present, a default instance of
     *     FilterUsingXForwardedHeaders is created, using the `trustReservedSubnets()`
     *     constructor.
     * @return ServerRequest
     */
    public static function fromGlobals(
        array $server = null,
        array $query = null,
        array $body = null,
        array $cookies = null,
        array $files = null,
        ?FilterServerRequestInterface $requestFilter = null
    ) : ServerRequest {
        $requestFilter = $requestFilter ?: FilterUsingXForwardedHeaders::trustReservedSubnets();

        $server = normalizeServer(
            $server ?: $_SERVER,
            is_callable(self::$apacheRequestHeaders) ? self::$apacheRequestHeaders : null
        );
        $files   = normalizeUploadedFiles($files ?: $_FILES);
        $headers = marshalHeadersFromSapi($server);

        if (null === $cookies && array_key_exists('cookie', $headers)) {
            $cookies = parseCookieHeader($headers['cookie']);
        }

        return $requestFilter(new ServerRequest(
            $server,
            $files,
            self::marshalUriFromSapi($server),
            marshalMethodFromSapi($server),
            'php://input',
            $headers,
            $cookies ?: $_COOKIE,
            $query ?: $_GET,
            $body ?: $_POST,
            marshalProtocolVersionFromSapi($server)
        ));
    }

    /**
     * {@inheritDoc}
     */
    public function createServerRequest(string $method, $uri, array $serverParams = []) : ServerRequestInterface
    {
        $uploadedFiles = [];

        return new ServerRequest(
            $serverParams,
            $uploadedFiles,
            $uri,
            $method,
            'php://temp'
        );
    }

    /**
     * Marshal a Uri instance based on the values present in the $_SERVER array and headers.
     *
     * @param array $server SAPI parameters
     */
    private static function marshalUriFromSapi(array $server) : Uri
    {
        $uri = new Uri('');

        // URI scheme
        $https  = false;
        if (array_key_exists('HTTPS', $server)) {
            $https = self::marshalHttpsValue($server['HTTPS']);
        } elseif (array_key_exists('https', $server)) {
            $https = self::marshalHttpsValue($server['https']);
        }

        $uri = $uri->withScheme($https ? 'https' : 'http');

        // Set the host
        [$host, $port] = self::marshalHostAndPort($server);
        if (! empty($host)) {
            $uri = $uri->withHost($host);
            if (! empty($port)) {
                $uri = $uri->withPort($port);
            }
        }

        // URI path
        $path = self::marshalRequestPath($server);

        // Strip query string
        $path = explode('?', $path, 2)[0];

        // URI query
        $query = '';
        if (isset($server['QUERY_STRING'])) {
            $query = ltrim((string) $server['QUERY_STRING'], '?');
        }

        // URI fragment
        $fragment = '';
        if (strpos($path, '#') !== false) {
            [$path, $fragment] = explode('#', $path, 2);
        }

        return $uri
            ->withPath($path)
            ->withFragment($fragment)
            ->withQuery($query);
    }

    /**
     * Marshal the host and port from the PHP environment.
     *
     * @return array{string, int|null} Array of two items, host and port,
     *     in that order (can be passed to a list() operation).
     */
    private static function marshalHostAndPort(array $server) : array
    {
        static $defaults = ['', null];

        if (! isset($server['SERVER_NAME'])) {
            return $defaults;
        }

        $host = (string) $server['SERVER_NAME'];
        $port = isset($server['SERVER_PORT']) ? (int) $server['SERVER_PORT'] : null;

        if (! isset($server['SERVER_ADDR'])
            || ! preg_match('/^\[[0-9a-fA-F\:]+\]$/', $host)
        ) {
            return [$host, $port];
        }

        // Misinterpreted IPv6-Address
        // Reported for Safari on Windows
        return self::marshalIpv6HostAndPort($server, $port);
    }

    /**
     * @return array{string, int|null} Array of two items, host and port,
     *     in that order (can be passed to a list() operation).
     */
    private static function marshalIpv6HostAndPort(array $server, ?int $port) : array
    {
        $host             = '[' . (string) $server['SERVER_ADDR'] . ']';
        $port             = $port ?: 80;
        $portSeparatorPos = strrpos($host, ':');

        if (false === $portSeparatorPos) {
            return [$host, $port];
        }

        if ($port . ']' === substr($host, $portSeparatorPos + 1)) {
            // The last digit of the IPv6-Address has been taken as port
            // Unset the port so the default port can be used
            $port = null;
        }
        return [$host, $port];
    }

    /**
     * Detect the path for the request
     *
     * Looks at a variety of criteria in order to attempt to autodetect the base
     * request path, including:
     *
     * - IIS7 UrlRewrite environment
     * - REQUEST_URI
     * - ORIG_PATH_INFO
     */
    private static function marshalRequestPath(array $server) : string
    {
        // IIS7 with URL Rewrite: make sure we get the unencoded url
        // (double slash problem).
        $iisUrlRewritten = $server['IIS_WasUrlRewritten'] ?? null;
        $unencodedUrl    = $server['UNENCODED_URL'] ?? '';
        if ('1' === $iisUrlRewritten && is_string($unencodedUrl) && '' !== $unencodedUrl) {
            return $unencodedUrl;
        }

        $requestUri = $server['REQUEST_URI'] ?? null;

        if (is_string($requestUri)) {
            return preg_replace('#^[^/:]+://[^/]+#', '', $requestUri);
        }

        $origPathInfo = $server['ORIG_PATH_INFO'] ?? '';
        if (! is_string($origPathInfo) || '' === $origPathInfo) {
            return '/';
        }

        return $origPathInfo;
    }

    /**
     * @param mixed $https
     */
    private static function marshalHttpsValue($https) : bool
    {
        if (is_bool($https)) {
            return $https;
        }

        if (! is_string($https)) {
            throw new Exception\InvalidArgumentException(sprintf(
                'SAPI HTTPS value MUST be a string or boolean; received %s',
                gettype($https)
            ));
        }

        return 'on' === strtolower($https);
    }
}
