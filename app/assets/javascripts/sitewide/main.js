$.app = (function(app, $, undefined) {
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

    /*  app.addAjax = function() {
    $('a').on('click', function() {
      $.ajax({
        url: $(this).attr('href'),
        method: 'GET'
      })
        .done(function(data, textStatus, xhr){
          
        })
        .fail(function(xhr, textStatus, error) {
        });
    });
  };*/
  return app;
})($.app || {}, jQuery);

$(document).on('turbolinks:load', function() {
  $.app.fixNavOnScroll();
});
