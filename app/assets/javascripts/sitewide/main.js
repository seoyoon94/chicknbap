$.app = (function(app, $, undefined) {
  //Upon user scrolling down, fix the navbar on top
  app.fixNavOnScroll = function() {
    let navbar = $('.navbar');
    let headerHeight = navbar.height();
    $(window).on('scroll', function() {
      if($(window).scrollTop() > headerHeight) {
        navbar.addClass('navbar-is-fixed');
      }
      else {
        navbar.removeClass('navbar-is-fixed');
      }
    });
  };
  return app;
})($.app || {}, jQuery);

$(document).on('turbolinks:load', function() {
  $.app.fixNavOnScroll();
});
