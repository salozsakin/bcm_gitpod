((Drupal, $) => {
  Drupal.behaviors.paragraphText = {
    attach(context) {
      console.log('hola');
      const wysiwyg = $('.field--name-localgov-text');

      console.log(wysiwyg.find('[data-hspace]').getAttribute());

      // data-hspace
      // if (wysiwyg.find('[data-hspace]')){
      //   console.log($(this).getAttribute('[data-hspace]'));
      // }

      // data-vspace

      // data-border
    },
  };
})(Drupal, jQuery);
