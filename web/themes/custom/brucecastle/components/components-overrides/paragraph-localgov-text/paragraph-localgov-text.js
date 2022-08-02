((Drupal) => {
  Drupal.behaviors.paragraphText = {
    attach(context) {
      const wysiwyg = context.querySelectorAll('.field--name-localgov-text');

      wysiwyg.forEach((element) => {
        const mediaWithVspace = element.querySelectorAll(['[data-vspace]']);
        mediaWithVspace.forEach((mediaElement) => {
          mediaElement.style.marginTop = `${mediaElement.getAttribute(
            'data-vspace',
          )}px`;
          mediaElement.style.marginBottom = `${mediaElement.getAttribute(
            'data-vspace',
          )}px`;
        });

        const mediaWithHspace = element.querySelectorAll(['[data-hspace]']);
        mediaWithHspace.forEach((mediaElement) => {
          mediaElement.style.marginRight = `${mediaElement.getAttribute(
            'data-hspace',
          )}px`;
          mediaElement.style.marginLeft = `${mediaElement.getAttribute(
            'data-hspace',
          )}px`;
        });

        const mediaWithBorder = element.querySelectorAll(['[data-border]']);
        mediaWithBorder.forEach((mediaElement) => {
          const imageElement = mediaElement.querySelector('img');
          if (imageElement) {
            imageElement.style.border = mediaElement.getAttribute(
              'data-border',
            );
          }
        });
      });
    },
  };
})(Drupal);
