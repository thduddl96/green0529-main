let head_bg = document.querySelector(".head");
let gnb = document.querySelectorAll(".menu > li");
let sub = document.querySelectorAll(".sub");
let subUl = document.querySelectorAll(".sub>ul");
function myfnc() {
  sub.forEach(function (v, k) {
    v.classList.remove("on");
    v.style.height = 0 + "px";
    v.querySelector("a").classList.remove("on");
  });
  head_bg.style.height = 80 + "px";
  head_bg.style.backgroundColor = "none";
  document.querySelector(".logo img").src = "images/logo.svg";
}

gnb.forEach(function (v, k) {
  v.onmouseenter = function () {
    console.log(head_bg.offsetHeight);
    head_bg.style.backgroundColor = "#fff";
    //마우스를 올렸을 때: onmouseenter
    //색도 넣을 수 있음(빨강 넣은 거임.)
    document.querySelector(".logo img").src = "images/logo-d.svg";
    try {
      subUl.forEach(function () {
        let ht = subUl[k].offsetHeight + 120;
        //console.log(ht);
        gnb[k].querySelector(".sub").style.height = ht + "px";
        gnb[k].querySelector(".sub").classList.add("on");
        head_bg.style.height = ht + "px";
      });
    } catch (error) {
      head_bg.style.height = 80 + "px";
    }
  };
  //실행은 하는데 에러 있으면 얘만try 하는 실행문
  v.onmouseleave = function () {
    myfnc();
  };
});
//offsetHeight은 내가 선택한 개체의 높이값.
//현재 점 서브에 값이 없고, 각각 높이 값이 다 달라서
head_bg.onmouseenter = function () {
  gnb.forEach(function (v, k) {
    v.querySelector("a").classList.add("on");
  });
  head_bg.style.height = 80 + "px";
  head_bg.style.backgroundColor = "#fff";
  document.querySelector(".logo img").src = "images/logo-d.svg";
};
head_bg.onmouseleave = function () {
  myfnc();
  gnb.forEach(function (v, l) {
    v.querySelector("a").classList.remove("on");
  });
};
