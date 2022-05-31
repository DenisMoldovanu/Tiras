$(document).ready(function() {
  $(".featured-post .slider-wrapper").each(function(i) {
    var featuredPostSlider = new Swiper ($(this).find('.swiper-container'), {
      slidesPerView: 1,
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
      }
    });
  });
});
