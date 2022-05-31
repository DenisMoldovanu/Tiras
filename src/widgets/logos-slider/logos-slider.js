$(document).ready(function() {
  var logoSlider = new Swiper ($(this).find('.logos-slider .swiper-container'), {
    slidesPerView: 'auto',
    spaceBetween: 50,
    centeredSlides: true,
    loop: true,
    speed: 900,
    allowTouchMove: true,
    slideToClickedSlide:false,
    freeMode: true,
    mousewheel: {
      releaseOnEdges: true,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    breakpoints: {
      768: {
        spaceBetween: 30
      },
      300: {
        slidesPerView: 4,
        spaceBetween: 30
      }
    }
  });


});
