"use strict";

if (!Modernizr.touch) new WOW().init();

$(window).on("load", function() {
  setTimeout(function(){
    $(".teaser-image").addClass("loaded");
  }, 500);
});
