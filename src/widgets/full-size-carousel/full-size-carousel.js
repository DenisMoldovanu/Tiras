$(document).ready(function () {
  $(".full-size-carousel").each(function () {
    var fullSizeCarousel = new Swiper($(this).find(".swiper-container"), {
      direction: "horizontal",
      centeredSlides: false,
      speed: 900,
      loop: true,
      slidesPerView: 1,
      navigation: {
        prevEl: $(this).find(".custom-slider-nav--prev"),
        nextEl: $(this).find(".custom-slider-nav--next"),
      },
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        992: {
          allowTouchMove: false,
        },
        300: {
          allowTouchMove: true,
          loop: false
        },
      },
    });

    //dont show navigation arrows on one slide if using looped slides
    var swiper__slidecount = fullSizeCarousel.slides.length - 2;
    if (swiper__slidecount < 2) {
      $('.custom-slider-nav--prev,.custom-slider-nav--next').remove();
    }
  });
});
