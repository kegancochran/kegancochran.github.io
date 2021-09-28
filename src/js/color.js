var jquery = require("jquery");
window.$ = window.jQuery = jquery; // notice the definition of global variables here
require("jquery-ui-dist/jquery-ui.js");

$("#column-red").click(function () {
  $("#column-red").toggleClass("bg-dark-red");
});

$("#column-blue").click(function () {
  $("#column-blue").toggleClass("bg-dark-blue");
});

$("#column-green").click(function () {
  $("#column-green").toggleClass("bg-dark-green");
});

$("#header").click(function () {
  $(this).toggleClass("bg-yellow");
  if ( $('#a').hasClass('near-white') ) {
    $('#a').toggleClass('near-white');
    $('#a').addClass('near-black');
  }
  else ( $('#a').toggleClass('near-black') )
});

$(".click-fill").click(function () {
  $(".click-fill").not(this).removeClass (function (index, className) {
    return (className.match (/\bbg-\S+/g) || []).join(' ');
  });
  $(".click-fill").not(this).removeClass("fill");
  $(this).toggleClass("fill");
});

$(".click-fill").not('#header').click(function () {
  if ( $('#a').hasClass('near-black') ) {
    $('#a').toggleClass('near-black');
    $('#a').toggleClass('near-white');
    }
});
