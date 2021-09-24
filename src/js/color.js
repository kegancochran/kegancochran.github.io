$(".column").click(function () {
  $(".column").not(this).removeClass("fill");
  $(this).toggleClass("fill");
  $(".column").not(this).addClass("collapse");
});

$("header").click(function () {
  $(this).toggleClass("bg-yellow");
  $(this).toggleClass("near-black");
});

$("#column-red").click(function () {
  $("#column-red").toggleClass("bg-dark-red");
});

$("#column-blue").click(function () {
  $("#column-blue").addClass("bg-dark-blue");
});

$("#column-green").click(function () {
  $("#column-green").addClass("bg-dark-green");
});
