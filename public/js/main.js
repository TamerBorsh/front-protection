$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
  
    autoplay: true,
    autoplaySpeed: 1000,
    dotsSpeed: 1000,
    nav: true,
    navSpeed: 1000,
    // center: true,
    // autoWidth: false,
  
    responsiveClass: true,
    responsive: {
      320: {
        items: 1
      },
      480: {
        items: 1
      },
      640: {
        items: 1
      },
      768: {
        items: 2
      },
      1024: {
        items: 3
      },
      1280: {
        items: 3
      }
    }
  
  })
  //////////////////////////
  $(function () {
    'use strict';
    var winH = $(window).height(),
        top = $('.topbar').innerHeight(),
        mainSliderH = $('.mainSlider').innerHeight();
        $('.mainSlider_2').height(winH - (top + mainSliderH));
  });
//////////////////////////
$(function() {
  $("#seach").click(function() {
  $("#topSearch").show(500);
});
$("#endSearch").click(function() {

  $("#topSearch").hide(500);

});
});
//////////////////////////
$(document).ready(function(){
  $("#myBtn").click(function(){
    $("#myModal").modal();
  });
});