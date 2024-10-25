$(function () {
  let con = document.querySelectorAll(".con");
  $(con[0]).addClass("on");
  $(".nav li").click(function () {
    let i = $(this).index();
    //   console.log(i);
    $(con).removeClass("on");
    $(con[i]).addClass("on");
  });
  $(".con li").hover(
    function () {
      let img = $(this).index();
      console.log(img);
      $(".con li").eq(img).find("img").addClass("on");
    },
    function () {
      $(".con li img").removeClass("on");
    }
  );
});
