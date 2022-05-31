$(document).ready(function() {
  // sticky navigation hide on scroll
  if ($('.with-sticky-nav').length > 0) {
    $(window).scroll(function() {
      if ($(this).scrollTop()>450) {
        $('.sticky-nav').fadeOut();
      } else {
        $('.sticky-nav').fadeIn();
      }
    });
  }

  // sticky nav scroll to functionality
  if ($('.scrollTo').length > 0) {
    $(".scrollTo").on('click', function(e) {
      e.preventDefault();
      var target = $(this).attr('href');
      $('html, body').animate({
        scrollTop: ($(target).offset().top - 90)
      }, 2000);
    });
  }


  $(".sticky-nav .slider-tabs").each(function(i) {
    var stickyNavTabSlider = new Swiper ($(this).find('.swiper-container'), {
      slidesPerView: 'auto',
      centeredSlides: false,
      loop: false,
      spaceBetween: 45,
      speed: 900,
      allowTouchMove: false,
      slideToClickedSlide: false,
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
       breakpoints: {
        300: {
          slidesPerView: 1.9,
          allowTouchMove: true,
          spaceBetween: 5,
        },
        480: {
          slidesPerView: 2.8,
          allowTouchMove: true,
          spaceBetween: 15,
        },
        767: {
          slidesPerView: 3.3,
          allowTouchMove: false,
          spaceBetween: 15,
        },
        992: {
          slidesPerView: 'auto',
          allowTouchMove: false,
        },
      },
    });
  });
});
