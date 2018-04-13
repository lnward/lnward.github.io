/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function () {
    $('body').on('click', 'a.page-scroll', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 100
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    }); /*"1000" controls how fast it scrolls, top - 45 determines where it tops */
});


// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function () {
    $('.navbar-toggle:visible').click();
});

$(document).on("scroll", function(){
  if
    ($(document).scrollTop() > 100){
    $("h1").addClass("shrink");
  }
  else
  {
    $("h1").removeClass("shrink");
  }
});
