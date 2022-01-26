#!/bin/bash

if [ ! -d /app/web/sites/default/files ]; then
    mkdir -p /app/web/sites/default/files
    chmod -R 777 /app/web/sites/default/files
fi

if [ ! -d /app/web/sites/default/private ]; then
    mkdir -p /app/web/sites/default/private
    chmod -R 777 /app/web/sites/default/private
fi

chmod 755 /app/web/sites/default
