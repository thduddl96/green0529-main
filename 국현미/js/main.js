let slide = document.querySelectorAll(".swiper-slide");
    var swiper = new Swiper(".mySwiper", {
      speed: 1000,
      loop: true,
      autoplay: {
        delay: 2500,
      },
    });
  </script>
  <body>
    <div class="swiper mySwiper1">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="./images/main_obj_01.png" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="./images/main_obj_02.png" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="./images/main_obj_03.png" alt="" />
        </div>
      </div>
      <div class="con">
        <ul>
          <li>
            <h1>AUTO FINANCE</h1>
            <h2>자동차 금융</h2>
            <p>빠르고 편리한 자동차금융</p>
          </li>
        </ul>
      </div>
      <div class="swiper-pagination"></div>
      <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

    
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