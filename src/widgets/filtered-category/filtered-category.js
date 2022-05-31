// external js: isotope.pkgd.js

$(document).ready(function() {
// slider
$(".filtered-category").each(function(i) {
    var filteredCategorySlider = new Swiper ($(this).find('.swiper-container'), {
      slidesPerView: 'auto',
      spaceBetween: 10,
      centeredSlides: false,
      loop: false,
      speed: 900,
      allowTouchMove: true,
      slideToClickedSlide: false,
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      breakpoints: {
        300: {
          slidesPerView: 'auto',
          spaceBetween: 0,
          slideToClickedSlide: true,
        },
        768: {
          slidesPerView: 'auto',
          slideToClickedSlide: false,
        },
        992: {
          slidesPerView: 'auto',
          slideToClickedSlide: false,
        }
      }
    });
  });

// filters
if ($('.filtered-category').length > 0) {
  // store filter for each group
  // var buttonFilters = {};
  var buttonFilter;
  // quick search regex
  var qsRegex;

  // init Isotope
  var $container = $('.isotope').isotope({
    itemSelector: '.element-item',
    layoutMode: 'fitRows',
    filter: function() {
    var $this = $(this);
    var searchResult = qsRegex ? $this.text().match( qsRegex ) : true;
    var buttonResult = buttonFilter ? $this.is( buttonFilter ) : true;
    return searchResult && buttonResult;
  },
  });

  // bind filter button click
  $('#filters').on('click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    // use filterFn if matches value
    $container.isotope({
      filter: filterValue
    });
  });

  // use value of search field to filter
var $quicksearch = $('.quicksearch').keyup( debounce( function() {
  qsRegex = new RegExp( $quicksearch.val(), 'gi' );
  $container.isotope();
}) );

// flatten object by concatting values
function concatValues( obj ) {
  var value = '';
  for ( var prop in obj ) {
    value += obj[ prop ];
  }
  return value;
}

// debounce so filtering doesn't happen every millisecond
function debounce( fn, threshold ) {
  var timeout;
  threshold = threshold || 100;
  return function debounced() {
    clearTimeout( timeout );
    var args = arguments;
    var _this = this;
    function delayed() {
      fn.apply( _this, args );
    }
    timeout = setTimeout( delayed, threshold );
  };
}

  // change is-checked class on buttons
  $('.button-group').each(function(i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on('click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $(this).addClass('is-checked');
    });
  });

  //****************************
  // Isotope Load more button
  //****************************
  // var initShow = 9; //number of items loaded on init & onclick load more button
  if ($(window).width() < 992) {
    var initShow = 2; //number of items loaded on init & onclick load more button
  }
  else {
    var initShow = 9; //number of items loaded on init & onclick load more button
  }

  var counter = initShow; //counter for load more button
  var iso = $container.data('isotope'); // get Isotope instance

  loadMore(initShow); //execute function onload

  function loadMore(toShow) {
    $container.find(".hidden").removeClass("hidden");

    var hiddenElems = iso.filteredItems.slice(toShow, iso.filteredItems.length).map(function(item) {
      return item.element;
    });
    $(hiddenElems).addClass('hidden');
    $container.isotope('layout');

    //when no more to load, hide show more button
    if (hiddenElems.length == 0) {
      $("#load-more").hide();
    } else {
      $("#load-more").show();
    };

  }

  //append load more button
  $container.after('<div class="text-center"><button id="load-more" class="button black-btn"> Load More</button></div>');

  //when load more button clicked
  $("#load-more").click(function() {
    if ($('#filters').data('clicked')) {
      //when filter button clicked, set initial value for counter
      counter = initShow;
      $('#filters').data('clicked', false);
    } else {
      counter = counter;
    };

    counter = counter + initShow;

    loadMore(counter);
  });

  //when filter button clicked
  $("#filters").click(function() {
    $(this).data('clicked', true);

    loadMore(initShow);
  });

}

});
