$(document).ready(function() {
  // swiper slider
   $('.card-listing-filter-slider').each(function() {
		var cardsListingFilterSlider = new Swiper ($(this).find('.swiper-container'), {
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
          // if (this.slides.length <= 4) {
          //   $('.card-listing-filter-slider .swiper-container').css('overflow', 'initial');
          // } else {
          //   $('.card-listing-filter-slider .swiper-container').css('overflow', 'initial');
          // }

          //on keypress
          // $('.card-listing-filter-slider .swiper-container .card-item').keydown(function() {
          //  $('.card-listing-filter-slider .swiper-container').css('overflow', 'hidden');
          // });
        }
      }
		});
	})
  // end swiper slider

  // mobile button filter overlay
  // filter functionality
  var filterButton = $(".filtered-features .mobile-filter-btn .button"),
		  filterOverlay = $(".filtered-features .filter-message"),
		  open = false;

  filterButton.on("click touchstart", function(e) {
    e.preventDefault();

    if (open) {
      open = false;
      filterOverlay.removeClass("is-open");
      $('body').removeClass('overflow-hidden');
    }	else {
      open = true;
      filterOverlay.addClass("is-open");
      $('body').addClass('overflow-hidden');
    }
  });

  $('.filtered-features .filter-message select').on('changed.bs.select', function (e) {
   $(this).closest('.bootstrap-select').toggleClass("check-selected");

   $('.filtered-features .filter-message .dropdown-items').each(function(){
      var filter_selected = $('.check-selected').length;
      $('.filter-selected').empty();
      $('.filter-selected').append(filter_selected);
   });
  });
  // end mobile button filter overlay

  // desktop filter
  (function($) {
   var $cardGrid = $(".card-grid"),
      $cards = $cardGrid.find(".grid-item"),
      $dept = $('select[name="dept"]'),
      $location = $('select[name="location"]'),
      $camps = $('select[name="camp"]'),
      $academy = $('select[name="academy"]'),
      $performance = $('select[name="performance"]'),
      $rehabilitation = $('select[name="rehabilitation"]'),
      $sports = $('select[name="sports"]'),
      $select = $(".card-filter select"),
      $viewAll = $("#rf-view-all");

   var $departments = [],
      $locations = [];

   function showAll() {
      $dept.prop("selectedIndex", 0);
      $location.prop("selectedIndex", 0);
      $camps.prop("selectedIndex", 0);
      $academy.prop("selectedIndex", 0);
      $performance.prop("selectedIndex", 0);
      $rehabilitation.prop("selectedIndex", 0);
      $sports.prop("selectedIndex", 0);
      $cards.show().removeClass('selected third');
      $cardGrid.removeClass('filtered');
   }
   function filterItems() {
      var $activeClass = "";

      if ($location.val() !== "*") {
         $activeClass += $location.val();
      }
      if ($dept.val() !== "*") {
         $activeClass += $dept.val();
      }
      if ($sports.val() !== "*") {
         $activeClass += $sports.val();
      }
      if ($academy.val() !== "*") {
         $activeClass += $academy.val();
      }
      if ($camps.val() !== "*") {
         $activeClass += $camps.val();
      }
      if ($performance.val() !== "*") {
         $activeClass += $performance.val();
      }
      if ($rehabilitation.val() !== "*") {
         $activeClass += $rehabilitation.val();
      }

      if ($activeClass !== "") {
        $cards.hide().removeClass('selected').removeClass('third').addClass('hidden-card');
        $cardGrid.addClass('filtered').find($activeClass).show().addClass('selected').removeClass('hidden-card').filter(function(index, element){
        return index % 3 == 2;
        }).addClass("third");
      } else {
        showAll();
      }
   }

   // Build array of items to generate options for Select Menus
   $.each($cards, function() {
      var $d = $(this).attr("data-dept"),
         $l = $(this).attr("data-location");

      // if( ! $(this).hasClass('.volleyball') ) {
      //    $(this).addClass('football');
      // }
      if ($.inArray($d, $departments) === -1 && $d !== "") {
         $departments.push($d);
      }
      if ($.inArray($l, $locations) === -1 && $l !== "") {
         $locations.push($l);
      }
   });

   // Order Items Alphabetically within array
   $departments.sort();
   $locations.sort();

   // Build Department/Subpeciality options
   for (var z = 0; z < $departments.length; z++) {
      var $class = $departments[z].toLowerCase();
      $class = $class.replace(/\s/g, "-").replace("-&-", "-");

      $dept.append(
         '<option value=".dept-' + $class + '">' + $departments[z] + "</option>"
      );
   }

    // Build Locations Options
    for (var l = 0; l < $locations.length; l++) {
        var $loc = $locations[l]
          .toLowerCase()
          .replace(",", "")
          .replace(/(\s)/g, "-");

        $location.append(
          '<option value=".loc-' + $loc + '">' + $locations[l] + "</option>"
        );
    }

    // Trigger Changes
    $select.on("change", function() {
        filterItems();
    });

    $viewAll.on("click", function(e) {
        e.preventDefault();
        showAll();
    });

    $('.card-filter select').on('changed.bs.select', function (e) {
      if ($cardGrid.children().length == $cardGrid.children(".hidden-card").length) {
        $('.filtered-features .no-item').addClass('show');
        $('.filtered-features .card-grid.filtered').css('display', 'none');
      }


      if ($cards.hasClass("selected")) {
        // $(".filtered-features .card-item.selected").first().css('border-left', 'none');
        $('.filtered-features .no-item').removeClass('show');
        $('.filtered-features .card-grid.filtered').css('display', 'flex');
      }
    });

  })(jQuery);
});
