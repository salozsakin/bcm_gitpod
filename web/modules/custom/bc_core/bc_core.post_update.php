<?php

/**
 * Install redirect module.
 */
function bc_core_post_update_enable_redirect_module(&$sandbox) {
  $modules_list = [
    'redirect',
  ];
  Drupal::service('module_installer')->install($modules_list);

  return t('Installed ' . implode(',', $modules_list));
}
