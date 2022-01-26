<?php

namespace Drupal\Tests\search_api\Kernel\Views;

use Drupal\Core\Cache\Context\CacheContextsManager;
use Drupal\Core\Cache\Context\ContextCacheKeys;
use Drupal\Core\Config\Config;
use Drupal\Core\DependencyInjection\ContainerBuilder;
use Drupal\Core\Serialization\Yaml;
use Drupal\KernelTests\KernelTestBase;
use Drupal\views\Entity\View;
use Drupal\views\ViewEntityInterface;
use Drupal\views\ViewExecutable;

/**
 * Tests that the correct query type is stored with views. 
 *
 * @group search_api
 */
class ViewsQueryTypeUpdateTest extends KernelTestBase {

  /**
   * {@inheritdoc}
   */
  protected $strictConfigSchema = FALSE;

  /**
   * The entity type manager.
   *
   * @var \Drupal\Core\Entity\EntityTypeManagerInterface
   */
  protected $entityTypeManager;

  /**
   * The service that is responsible for creating Views executable objects.
   *
   * @var \Drupal\views\ViewExecutableFactory
   */
  protected $viewExecutableFactory;

  /**
   * The view configuration array as created by views.
   *
   * @var array
   */
  protected $originalView;

  /**
   * {@inheritdoc}
   */
  protected static $modules = [
    'field',
    'node',
    'search_api',
    'search_api_db',
    'search_api_test_node_indexing',
    'system',
    'text',
    'user',
    'views',
  ];

  /**
   * {@inheritdoc}
   */
  protected function setUp(): void {
    parent::setUp();

    $this->installEntitySchema('node');
    $this->installEntitySchema('search_api_task');

    $this->installConfig([
      'search_api',
      'search_api_test_node_indexing',
    ]);

    $this->entityTypeManager = $this->container->get('entity_type.manager');
    $this->viewExecutableFactory = $this->container->get('views.executable');

    $view_yml = file_get_contents(drupal_get_path('module', 'search_api') . '/tests/fixtures/views.view.search_api_query_type_test.yml');
    $this->originalView = Yaml::decode($view_yml);
  }

  /**
   * Tests that an existing view is updated with correct query.
   */
  public function testViewUpdate() {
    $config = \Drupal::configFactory()->getEditable('views.view.' . $this->originalView['id']);
    $config->setData($this->originalView);
    $config->save();

    require(drupal_get_path('module', 'search_api') . '/search_api.post_update.php');
    search_api_post_update_views_query_type();

    // Check that the altered metadata is now present in the view and the
    // configuration.
    $view = $this->getView();
    $display = $view->getDisplay();
    $this->assertEquals('search_api_query', $display->getOption('query')['type']);
    $this->assertEquals('none', $display->getOption('cache')['type']);
  }

  /**
   * Returns the test view executable.
   *
   * @return \Drupal\views\ViewExecutable
   *   The view.
   */
  protected function getView() {
    $view = $this->entityTypeManager->getStorage('view')
      ->load($this->originalView['id']);
    assert($view instanceof ViewEntityInterface);
    $executable = $this->viewExecutableFactory->get($view);

    return $executable;
  }

}
