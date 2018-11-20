/**
 *
 * For accessibility add list aria roles
 *
 */
(function($, Drupal, window, document, undefined) {

  Drupal.behaviors.dfata_accessibilityFixes = {
    attach: function(context, settings) {

      $(".front .panels-flexible-region-4-landing_page_tiles-inside").attr("role", "list");
      $(".front .panels-flexible-region-4-landing_page_tiles-inside > div.panel-pane").each(function() {
        $(this).attr("role", "listitem");
      });

      // Make news block into list items
      $(".page-news .view-latest-news").attr("role", "list");
      $(".page-news .view-latest-news .views-row").each(function() {
        $(this).attr("role", "listitem");
      });

      // replace double quotation mark alt text with empty alt text
      $('img[alt=""""]').attr("alt", " ");

      // remove tabindex from images to avoid duplicate links
      $('.front .field-name-field-bean-image a').attr("tabindex", "-1");
    }
  };

})(jQuery, Drupal, this, this.document);
