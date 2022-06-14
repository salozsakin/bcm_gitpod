<?php

namespace Drupal\fakeobjects\Plugin\CKEditorPlugin;

use Drupal\ckeditor\CKEditorPluginBase;
use Drupal\editor\Entity\Editor;

/**
 * Defines the "jjj" plugin.
 *
 * @CKEditorPlugin(
 *   id = "jjj",
 *   label = @Translation("FakeObjects"),
 * )
 */
class FakeObjects extends CKEditorPluginBase {

  /**
   * {@inheritdoc}
   */
  public function getFile() {
    return 'libraries/jjj/plugin.js';
  }

  /**
   * {@inheritdoc}
   */
  public function getConfig(Editor $editor) {
    return [];
  }

  /**
   * {@inheritdoc}
   */
  public function getButtons() {
    return [];
  }

}
