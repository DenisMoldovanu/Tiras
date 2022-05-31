$(document).ready(function () {
  $(".filtered-blog").each(function () {
    var filteredBlog = new Swiper($(this).find(".swiper-container"), {
      direction: "horizontal",
      centeredSlides: true,
      speed: 900,
      loop: false,
      slidesPerView: 1,
      spaceBetween: 20,
      //   navigation: {
      //     prevEl: $(this).find(".features-slider-nav--prev"),
      //     nextEl: $(this).find(".features-slider-nav--next"),
      //   },
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
        },
      },
    });
  });
});
