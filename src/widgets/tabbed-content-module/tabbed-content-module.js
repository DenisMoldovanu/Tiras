$(document).ready(function () {
  //if width-tabs class is set display the tabs btn and functionality
  if ($(".hero-branding").hasClass("width-tabs")) {
    let tabsBtns = $(".tabs-list");
    $(".tabs-buttons").append(tabsBtns);

    $(".tabs-list span a").click(function (e) {
      e.preventDefault();
    });

    $(".tabs-list span").click(function () {
      var tabid = $(this).find("a").attr("href");
      history.replaceState({}, "", tabid);
      $(".tabs-list span,.tabs div.tab").removeClass("active"); // removing active class from tab

      $(".tab").hide(); // hiding open tab
      $(tabid).show(); // show tab
      $(this).addClass("active"); //  adding active class to clicked tab
    });
  } else {
    $(".tabs-list").hide();
  }
  // Set Swiper for tabs btns on mobile version
  if (window.matchMedia("(max-width: 767px)").matches) {
    var tabsSlider = new Swiper($(this).find(".tabs-list .swiper-container"), {
      centeredSlides: false,
      loop: false,
      speed: 900,
      allowTouchMove: true,
      slideToClickedSlide: true,
      freeMode: false,
      mousewheel: {
        releaseOnEdges: false,
      },
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      breakpoints: {
        270: {
          slidesPerView: 1.8,
          spaceBetween: 10,
        },
        // when window width is >= 320px
        360: {
          slidesPerView: 2.2,
          spaceBetween: 10,
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 2.5,
          spaceBetween: 30,
        },
        // when window width is >= 640px
        767: {
          slidesPerView: 3.5,
          spaceBetween: 40,
        },
      },
    });
  }

  // Seting toggle plus-minus btns in accordion tabs
  $(".myaccordion").on("hide.bs.collapse show.bs.collapse", (e) => {
    $(e.target).prev().find("svg").toggleClass("minus-icon");
  });

  //Seting function for tabs, if url hash == a href then  open tab

  $(function () {
    var hash = window.location.hash;
    if (hash) {
      $('a[href="' + hash + '"]')
        .parent("span")
        .click();
      var elementID = hash.replace("#", "");
      $(elementID).show();
    } else {
      $(".tab:first").show();
      $(".tab:first").addClass("active");
    }
  });
});
