$(".column").click(function () {
  $(this).toggleClass("fill");
});

$("#column-red").click(function () {
  $("#column-red").addClass("bg-dark-red");
});

$("#column-blue").click(function () {
  $("#column-blue").addClass("bg-dark-blue");
});

$("#column-green").click(function () {
  $("#column-green").addClass("bg-dark-green");
});
