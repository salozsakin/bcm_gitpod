(function (Drupal, $) {
  Drupal.behaviors.homeCarousel = {
    attach: function attach(context) {
      const sliderContainer = $(
        '.paragraph--type--home-page-carousel .field--name-field-background-image',
        context,
      );
      if (sliderContainer.length > 0) {
        $(sliderContainer).slick({
          dots: true,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          arrowsPlacement: 'afterSlides',
        });
      }
    },
  };
})(Drupal, jQuery);
