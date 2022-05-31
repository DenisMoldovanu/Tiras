
$(document).ready(function() {
  const sectionsWithCarousel = document.querySelectorAll(
    ".section-with-carousel"
  );

  // if element exists
  if ($('.section-with-carousel').length > 0) {
    createOffsets();

    window.addEventListener("resize", createOffsets);
  }

  function createOffsets() {
    const sectionWithRightOffset = document.querySelector(
      ".section-with-right-offset"
    );
    const sectionWithRightOffsetCarouselWrapper = sectionWithRightOffset.querySelector(
      ".carousel-wrapper"
    );
    const offset = (window.innerWidth - 1100) / 2;
    const mqLarge = window.matchMedia("(min-width: 1200px)");

  }

  for (const section of sectionsWithCarousel) {
    let slidesPerView = [1.5, 2.5, 3.5];
    const swiper = section.querySelector(".section-with-carousel .swiper");
    new Swiper(swiper, {
      slidesPerView: slidesPerView[0],
      spaceBetween: 20,
      loop: true,
      allowTouchMove: true,
      lazyLoading: true,
      keyboard: {
        enabled: true
      },
      freeMode: true,
      mousewheel: {
        releaseOnEdges: true,
      },
      breakpoints: {
        768: {
          slidesPerView: slidesPerView[1],
          spaceBetween: 20,
          freeMode: false,
          mousewheel: {
            releaseOnEdges: false,
          },
        },
        1200: {
          slidesPerView: slidesPerView[2],
          spaceBetween: 50
        }
      }
    });
  }

});
