let slide = document.querySelectorAll(".swiper-slide");
var swiper = new Swiper(".mySwiper", {
  speed: 1000,
  loop: true,
  autoplay: {
    delay: 2500,
  },
});

var swiper1 = new Swiper(".mySwiper1", {
  //direction: "vertical",
  effect: "fade",
  speed: 1000,
  slidesPerView: 1,
  spaceBetween: 30,
  mousewheel: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  on: {
    slidechanged: function () {
      console.log("swiper initialized");
    },
  },
});
