$(document).ready(function () {
//Swiper for navigation block on mobile
  var navigationBlockSlider = new Swiper($(this).find(".navigation-block .swiper-container"), {
    centeredSlides: false,
    loop: false,
    speed: 900,
    allowTouchMove: true,
    slideToClickedSlide: true,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    breakpoints: {
      270: {
        slidesPerView: 2.5,
        spaceBetween: 0,
      },
      320: {
        slidesPerView: 2.5,
        spaceBetween: 0,
      },
      480: {
        slidesPerView: 2.5,
        spaceBetween: 5,
      },
      600: {
        slidesPerView: 3.3,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 'auto',
        spaceBetween: 30,
      },
    },
  });
});
