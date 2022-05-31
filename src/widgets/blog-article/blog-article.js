$(document).ready(function () {
  if (window.matchMedia("(max-width: 991px)").matches) {
    let newsBlock = $(".social-block-widget");
    let mobileTopics = $(".info-wrapper");
    $(".mobile-links").append(newsBlock);
    $(".mobile-topics").append(mobileTopics);
  }
});
