/* 
Notes: Main scripts
*/
jQuery.noConflict();
jQuery(document).ready(function ($) {
  //removes the second breadcrumb separator
  //$('#breadcrumbs a:nth-child(2)').next('>').hide();
  //adds span to the h2 on the home page
  $(".home h2, h1.strikethrough, .full-width h1").each(function () {
    $(this).wrapInner("<span></span>");
  });

});
