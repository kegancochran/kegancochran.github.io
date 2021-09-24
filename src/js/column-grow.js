$(".column").click(function () {
  $(this).removeClass("collapse");
  $(".column")
    .not(this)
    .each(function () {
      $(this).addClass("collapse");
    });
});
