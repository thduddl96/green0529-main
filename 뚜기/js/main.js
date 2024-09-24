let head_bg = document.querySelectorAll("#wrap");
let gnb = document.querySelectorAll(".menu > li");
let sub = document.querySelectorAll(".sub");
let subUl = document.querySelectorAll(".sub > li");
function myfnc() {
  sub.forEach(function (v, k) {
    v.classList.remove("on");
    v.style.height = 0 + "px";
    v.querySelector("a").classList.remove("on");
  });
  head_bg.style.height = 80 + "px";
  head_bg.style.backgroundColor + "none";
  document.querySelector(".logo img").src = "images/logo_wh.svg";
}
gnb.forEach(function (v, k) {
  v.onmouseenter = function () {
    console.log(head_bg.offsetHeight);
  };
});
