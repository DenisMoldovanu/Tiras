$(document).ready(function () {
  if (window.matchMedia("(max-width: 991px)").matches) {
    let mobileFeatures = $(".features-header");
    $(".features-header-mobile").append(mobileFeatures);
  }
});
