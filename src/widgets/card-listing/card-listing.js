$(document).ready(function() {

  $('.card-listing-block').each(function() {
		var cardsListingSlider = new Swiper ($(this).find('.swiper-container'), {
			centeredSlides: false,
			loop: false,
			slidesPerView: 4,
      allowTouchMove: true,
			spaceBetween: 0,
			speed: 900,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        prevEl: $(this).find('.custom-slider-nav--prev'),
        nextEl: $(this).find('.custom-slider-nav--next'),
      },
			keyboard: {
				enabled: true,
				onlyInViewport: true,
			},
      breakpoints: {
        300: {
          slidesPerView: 1,
        },
        992: {
          slidesPerView: 4
        }
      },
      on: {
        init: function () {
          if (this.slides.length <= 4) {
            $('.card-listing-block .swiper-container').css('overflow', 'initial');
          } else {
            $('.card-listing-block .swiper-container').css('overflow', 'hidden');
          }
        }
      }
		});
	})
});
