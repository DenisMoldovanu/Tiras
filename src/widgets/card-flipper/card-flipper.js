$(document).ready(function() {

  $( ".card-flipper .swiper-slide .flip-button" ).click(function() {
    $(this).closest(".swiper-slide").toggleClass( "flipped" );
  });

  $( ".card-flipper .swiper-slide" ).each(function() {
    $(this).on("mouseover", function(){
      $(this).addClass('zoom-in').fadeIn('slow');
      $(".swiper-slide").not(this).removeClass('zoom-in').removeClass('flipped');
    });

    $(this).on("mouseleave", function(){
      $(this).removeClass('zoom-in').removeClass('flipped');
      $(".swiper-slide").not(this).removeClass('zoom-in');
    });

    $(this).on("keydown", function(){
      $(this).addClass('zoom-in').fadeIn('slow');
      $(".swiper-slide").not(this).removeClass('zoom-in').removeClass('flipped');
    });

     $(this).on("keyup", function(){
      $(this).addClass('zoom-in').fadeIn('slow');
      $(".swiper-slide").not(this).removeClass('zoom-in').removeClass('flipped');
    });

  });

if (window.matchMedia("(max-width: 991px)").matches) {

  $(".card-flipper .slider-wrapper").find("div.other-cards").contents().unwrap();

  $(".card-flipper .slider-wrapper").each(function(i) {
    var cardFlipperSlider = new Swiper ($(this).find('.swiper-container'), {
      slidesPerView: 7,
      spaceBetween: 0,
      centeredSlides: false,
      loop: true,
      speed: 900,
      allowTouchMove: true,
      slideToClickedSlide:false,
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
          slidesPerView: 7,
          spaceBetween: 0
        },
        300: {
          slidesPerView: 1,
          spaceBetween: 0,
        }
      }
    });
  });
}
});
