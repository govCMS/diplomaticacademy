/**
 * Global variables.
 */
var desktop_breakpoint = 1200;
var large_tablet_breakpoint = 1024;
var tablet_breakpoint = 769;
var mobile_breakpoint = 420;

var desktop_column = 1170;

/**
 * govCMS general bootstrapping.
 */
(function($, Drupal, window, document, undefined) {

  Drupal.behaviors.dfata_theme = {
    attach: function(context, settings) {
      // Object Fit Polyfill for IE. Used on News Teaser Images.
      objectFitImages();
    }
  };

  // Slick carousel
  Drupal.behaviors.slickCarousel = {
    attach: function(context, settings) {
      $('.view-slideshow .view-content').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        speed: 500,
        fade: true,
        focusOnSelect: true,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        cssEase: 'linear',
        dots: true,
        arrows: true,
        accessibility: true
      });
    }
  };

  // Grab the Carousel Titles and place them into pagination inside a wrapper div
  Drupal.behaviors.grabTitles = {
    attach: function(context, settings) {
      var titles = [];
      $('.news-information h3').each(function(index) {
        titles[index] = $(this).text();
      });

      $('.slick-dots li').each(function(index) {
        $(this).html('<button class="carousel-desk-title" type="button" data-role="none" role="button" tabindex="0">' + titles[index] + '</button>');
      });
    }
  };

})(jQuery, Drupal, this, this.document);
