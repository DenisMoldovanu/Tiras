$(document).ready(function() {

  function setContainerOffset() {
    var containerPosition = $('.hero-branding .content-wrapper').offset().left;
    $(".hero-branding.hero-variation .swiper-pagination").offset({left: containerPosition + 50});
  }

   // if element exists
  if ($('.hero-branding .content-wrapper').length > 0) {
    setContainerOffset();

    if (screen.width > 991) {
      setContainerOffset();
    }

    $(window).resize(function(){
      if (screen.width > 991) {
      setContainerOffset();
      }
    })
  }

  $('.hero-branding.hero-variation').each(function() {
    var heroBrandingVariation = new Swiper ($(this).find('.swiper-container'), {
      direction: 'horizontal',
      centeredSlides: false,
			speed: 900,
      loop: false,
      slidesPerView: 1,
      // effect: 'fade',
      // fadeEffect: {
      //   crossFade: true
      // },
      keyboard: {
				enabled: true,
				onlyInViewport: true,
			},
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      breakpoints: {
        992: {
          allowTouchMove: false,
        },
        300: {
          allowTouchMove: true,
        }
      },
    })
	})
});
