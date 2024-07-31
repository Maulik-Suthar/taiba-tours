$(document).ready(function () {
  $("html,body").scrollTop(1);
  $(".menu-icon").click(function () {
    $(this).toggleClass("menu-close");
    $(".navigation-bar").toggleClass("slide-menu");
    $("body").addClass("body-fixed");
  });
  $(".sidebar-overlay, .close-menu").click(function () {
    $(".menu-icon").removeClass("menu-close");

    $(".navigation-bar").removeClass("slide-menu");

    $("body").removeClass("body-fixed");
  });
  $(".navbar-main li:has(ul)").prepend('<span class="arrow"></span>');
  $(".arrow").click(function () {
    $(this).siblings("ul").slideToggle("slow");

    $(this).toggleClass("minus");
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() > 350) {
      // $(".scrollTop").fadeIn();

      $(".header-main").addClass("has-sticky");
      $("body").addClass("sticky-header");
    } else {
      // $(".scrollTop").fadeOut();

      $(".header-main").removeClass("has-sticky");
      $("body").removeClass("sticky-header");
    }
  });

  $(".counter").countUp();

  $(".form-control").each(function () {
    $(this).change(function () {
      var inputValue = $(this).val();
      if (inputValue.length > 0) {
        $(this).addClass("isfocus").removeClass("isnotfocus");
      } else {
        $(this).addClass("isnotfocus").removeClass("isfocus");
      }
    });
  });

  $("#preferredDates").datepicker({
    defaultDate: "09/22/2019"
  });
});

