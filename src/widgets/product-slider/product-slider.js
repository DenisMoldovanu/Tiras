$(document).ready(function () {
  $(".product-slider .slider-item").each(function (i) {
    var swiperProductSlider = new Swiper($(this).find(".swiper-container"), {
      slidesPerView: 4,
      spaceBetween: 10,
      centeredSlides: false,
      loop: false,
      speed: 900,
      allowTouchMove: true,
      slideToClickedSlide: false,
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      navigation: {
        prevEl: $(this).find(".custom-slider-nav--prev"),
        nextEl: $(this).find(".custom-slider-nav--next"),
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        992: {
          slidesPerView: 4,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        300: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
      },
    });
  });
});
