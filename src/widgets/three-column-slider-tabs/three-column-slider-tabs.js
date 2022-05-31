$(document).ready(function() {
  $(".columns-with-tabs").each(function(i) {
    var swiperColumnsWithTabs = new Swiper ($(this).find('.swiper-container'), {
      slidesPerView: 1,
      spaceBetween: 0,
      centeredSlides: false,
      loop: false,
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
      }
    });
  });

  // filters
  (function($) {
   var $swiperGrid = $(".swiper-grid"),
      $swipers = $swiperGrid.find(".swiper-item"),
      $filterBySports = $('select[name="filterBySports"]'),
      $select = $(".columns-with-tabs .columns-filter .select-box select"),
      $viewAll = $("#btn-view-all");


   function showAll() {
      $filterBySports.prop("selectedIndex", 0);
      $swipers.show().removeClass('selected third');
      $swiperGrid.removeClass('filtered').addClass('view-all');
      $('.columns-with-tabs .load-more-btn').css('display', 'none');
   }
   function filterSlideItems() {
      var $activeClass = "";

      if ($filterBySports.val() !== "*") {
         $activeClass += $filterBySports.val();
      }

      if ($activeClass !== "") {
         $swipers.hide().removeClass('selected').removeClass('third').addClass('hidden-card');
         $swiperGrid.addClass('filtered').removeClass('view-all').find($activeClass).show().addClass('selected').removeClass('hidden-card').filter(function(index, element){
    return index % 3 == 2;
  }).addClass("third");
      } else {
         showAll();
      }
   }


   // Trigger Changes
   $select.on("change", function() {
      filterSlideItems();
   });

   $viewAll.on("click", function(e) {
      e.preventDefault();
      showAll();
   });


   $('.columns-with-tabs .select-box select').on('changed.bs.select', function (e) {
     if ($swiperGrid.children().length == $swiperGrid.children(".hidden-card").length) {
      $('.columns-with-tabs .no-item').addClass('show');
      $('.columns-with-tabs .swiper-wrapper.filtered').css('display', 'none');
      $('.columns-with-tabs .load-more-btn').css('display', 'none');
    }

    if ($swipers.hasClass("selected")) {
      $('.columns-with-tabs .no-item').removeClass('show');
      $('.columns-with-tabs .swiper-wrapper.filtered').css('display', 'flex');
      $('.columns-with-tabs .load-more-btn').css('display', 'block');
    }
  });
})(jQuery);


  // Load more button
  $(".columns-with-tabs .swiper-slide").slice(0, 3).css('display', 'flex');
  if ($(".columns-with-tabs .swiper-slide:hidden").length != 0) {
    $(".columns-with-tabs .load-more").show();
  }

  $(".columns-with-tabs .load-more").on("click", function (e) {
    e.preventDefault();
    $(".columns-with-tabs .swiper-slide:hidden").slice(0, 3).slideDown().css('display', 'flex');

    if ($(".columns-with-tabs .swiper-slide:hidden").length == 0) {
        $(".columns-with-tabs .load-more").fadeOut("slow");
    }
  });
});
