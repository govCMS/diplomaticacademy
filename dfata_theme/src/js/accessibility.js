/**
 * 
 * For accessibility wrap home page tiles in list and list roles
 *
 */
(function($, Drupal, window, document, undefined) {

  $(document).ready(function() {
    $(".front .panels-flexible-region-4-landing_page_tiles-inside").attr("role", "list");
    $(".front .panels-flexible-region-4-landing_page_tiles-inside > div.panel-pane").each(function() {
      $(this).attr("role", "listitem");
    });
  });

})(jQuery, Drupal, this, this.document);
