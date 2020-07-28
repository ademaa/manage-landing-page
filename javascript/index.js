
var arr=["nu1","nu2","nu3","nu4"];

$(".navbar-toggler").click(function(){
  // $(this).children().attr("src", "images/icon-close.svg");
  var src = ($(this).children().attr("src") === "images/icon-close.svg")
              ? "images/icon-hamburger.svg"
              : "images/icon-close.svg";
$(this).children().attr("src", src);
  $(".navbar-collapse").toggleClass("menu-navbar-collapse");
  $("#menu-button").toggleClass("hide-item");
});
$("#"+arr[3]).css("display","none");
$(".next").on("click",function(){
  $("#"+arr[0]).css("display","none");
  $("#"+arr[3]).fadeIn(800);
});
$(".prev").on("click",function(){
  $("#"+arr[3]).css("display","none");
  $("#"+arr[0]).fadeIn(800);
});
