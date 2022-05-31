$(document).ready(function () {
  // Set Swiper for tabs btns on mobile version
  if (window.matchMedia("(max-width: 991px)").matches) {
    var cardItemSlider = new Swiper(
      $(this).find(".four-block-module .swiper-container"),
      {
        spaceBetween: 10,
        centeredSlides: false,
        loop: false,
        speed: 900,
        allowTouchMove: true,
        slideToClickedSlide: true,
        freeMode: true,
        mousewheel: {
          releaseOnEdges: false,
        },
        keyboard: {
          enabled: true,
          onlyInViewport: true,
        },
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1.5,
            spaceBetween: 15,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 2.5,
            spaceBetween: 15,
          },
          // when window width is >= 767px
          767: {
            slidesPerView: 3.5,
            spaceBetween: 15,
          },
        },
      }
    );
  }
});
