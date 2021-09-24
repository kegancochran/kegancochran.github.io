import "@fontsource/inter";
import "tachyons";
import "tachyons-animate";
import "animate.css";
import "./css/column.css";

$(".column").click(function () {
  $(this).removeClass("collapse");
  $(".column")
    .not(this)
    .each(function () {
      $(this).addClass("collapse");
    });
});
