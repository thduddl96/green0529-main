$(document).ready(function () {
    $('.gnb_wrap .depth1').on('mouseenter', function(){
        $('#header').addClass('on');
    }).on('mouseleave', function(){
        $('#header').removeClass('on');
    });

  
    var swiper = new Swiper('.main_slider', {
        centeredSlides: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
      var eventSlider = new Swiper('.cont2_slider', {
        slidesPerView: 'auto',
        spaceBetween: 30,
        grabCursor: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
    });

});



