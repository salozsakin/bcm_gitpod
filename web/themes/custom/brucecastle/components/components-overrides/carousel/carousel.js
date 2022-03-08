((Drupal, $) => {
  Drupal.behaviors.homeCarousel = {
    attach(context) {
      const $sliderContainer = $(
        '.paragraph--type--home-page-carousel .field--name-field-background-image',
        context,
      );
      const $navigationContainer = $(
        '.home-page-carousel__custom-nav',
        context,
      );
      const $playButton = $navigationContainer.children(
        '.button--play--custom',
      );
      const $pauseButton = $navigationContainer.children(
        '.button--pause--custom',
      );
      // Initialize slick
      if ($sliderContainer.length > 0) {
        $sliderContainer.slick({
          dots: true,
          slidesToScroll: 1,
          fade: true,
          autoplay: false,
          autoplaySpeed: 3000,
          arrowsPlacement: 'afterSlides',
        });
      }
      // Bring slick dots within the custom slider controls
      const slickDots = $sliderContainer.find('.slick-dots');
      $navigationContainer.append(slickDots);
      // Set custom next and prev controls to trigger default slick controls
      $navigationContainer.children('.button--prev--custom').on('click', () => {
        $sliderContainer.find('.slick-prev').trigger('click');
      });
      $navigationContainer.children('.button--next--custom').on('click', () => {
        $sliderContainer.find('.slick-next').trigger('click');
      });
      // Start and pause autoplay on click
      $playButton.on('click', () => {
        $sliderContainer.slick('slickPlay');
        $pauseButton.removeClass('button--hidden');
        $playButton.addClass('button--hidden');
      });
      $pauseButton.on('click', () => {
        $sliderContainer.slick('slickPause');
        $playButton.removeClass('button--hidden');
        $pauseButton.addClass('button--hidden');
      });
    },
  };
})(Drupal, jQuery);
