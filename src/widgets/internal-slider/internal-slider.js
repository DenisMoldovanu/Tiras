$(document).ready(function() {
  $('.internal-slider').each(function() {
		var internalSlider = new Swiper ($(this).find('.swiper-container'), {
			direction: 'horizontal',
      centeredSlides: false,
      // loop needs to be false in order for arrows to dissapper when only 1 slider
			loop: true,
			slidesPerView: 1,
      allowTouchMove: true,
			spaceBetween: 0,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
			speed: 900,
      navigation: {
        prevEl: $(this).find('.internal-slider-nav--prev'),
        nextEl: $(this).find('.internal-slider-nav--next'),
      },
      keyboard: {
				enabled: true,
				onlyInViewport: true,
			},
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
		});

    //dont show navigation arrows on one slide if using looped slides
    var swiper__slidecount = internalSlider.slides.length - 2;
    if (swiper__slidecount < 2) {
      $('.internal-slider-nav--prev,.internal-slider-nav--next').remove();
    }
	})
});
