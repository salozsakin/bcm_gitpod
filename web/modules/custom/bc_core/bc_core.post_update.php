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

/**
 * Install better exposed filters.
 */
function bc_core_post_update_enable_better_exposed_filters(&$sandbox) {
  $modules_list = [
    'better_exposed_filters'
  ];
  Drupal::service('module_installer')->install($modules_list);

  return t('Installed ' . implode(',', $modules_list));
}
