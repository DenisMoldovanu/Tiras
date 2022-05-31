$(document).ready(function() {
  $(".column-slider .slider-item").each(function(i) {
    var swiperColumnSlider = new Swiper ($(this).find('.swiper-container'), {
      slidesPerView: 3,
      spaceBetween: 30,
      centeredSlides: false,
      loop: true,
      speed: 900,
      allowTouchMove: true,
      slideToClickedSlide:false,
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      navigation: {
        prevEl: $(this).find('.custom-slider-nav--prev'),
        nextEl: $(this).find('.custom-slider-nav--next'),
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      breakpoints: {
        992: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        300: {
          slidesPerView: 1,
          spaceBetween: 0,
        }
      }
    });
  });
});
