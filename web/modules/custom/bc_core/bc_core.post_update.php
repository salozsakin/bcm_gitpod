<?php

/**
 * Install anchor links and horizontal modules.
 */
function bc_core_post_update_enable_ckeditor_addons_modules(&$sandbox) {
  $modules_list = [
    'anchor_link',
    'fakeobjects',
  ];
  Drupal::service('module_installer')->install($modules_list);

  return t('Installed ' . implode(',', $modules_list));
}
