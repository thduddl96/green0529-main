$(document).ready(function () {

    // GNB UI
    var gnbUI = function() {
        var gnbWrap = $('#header .gnb_wrap');
        var dimm = $('#header .dimm');
        var body = $('body');

        // 메뉴나왔을때 스크롤막기
        $('#header .btn_menu').on('click', function () {
            gnbWrap.addClass('on');
            dimm.fadeIn();
            body.addClass('fixed');
        });

        $('.gnb_wrap .btn_close, #header .dimm').on('click', function () {
            gnbWrap.removeClass('on');
            dimm.fadeOut();
            body.removeClass('fixed');
            // 닫기클릭시 0.5초뒤 열려있는 서브메뉴 초기화
            setTimeout(function () {
                $('.depth1 .depth2').slideUp();
                $('.depth1 .depth2>li').removeClass('on');
            },500);
        });

        // gnb 아코디언
        // 1. 클릭이벤트를 a에 걸어줌, li는 depth2를 포함하고 있으므로
        // 2. 클릭한 a의 형제요소중 depth2를 slideDown()시킴
        // 3. 열려있는 다른 depth2는 닫기
        // 4. a태그 기본이벤트 막아 위로 올라가지않게
        // 5. 클릭한 a의 부모 li에 on클래스, 나머지 li는 removeClass()
        $('.depth1>li>a').on('click', function(e) {
            e.preventDefault();
            $(this).parent().siblings().removeClass('on');
            $(this).parent().toggleClass('on');
            $(this).parent().siblings().find('.depth2').stop().slideUp(300);
            $(this).siblings('.depth2').stop().slideToggle(300);
        });
    };
    gnbUI();

    var mainSlider = new Swiper('.main_slider', {
        loop: true,
        autoplay: {
            delay: 2000,
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
    });

    // 메인 서브웨이메뉴 탭메뉴
    // display:none인 요소에는 자바스크립트, swiper코드가 적용되지않음
    // height:0; overflow:hidden방식으로 요소를 안보이게 처리해야함
    // $('.section2 .slider_wrap .product_slider:gt(0)').hide();

    $('#main .section2 .tab_menu li').on('click', function(e) {
        e.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');

        var idx = $(this).index();
        //$('.section2 .slider_wrap .product_slider').eq(idx).show().siblings().hide();
        $('.section2 .slider_wrap .product_slider').eq(idx).addClass('active').siblings().removeClass('active');
    });

    

    //loop모드가 아닐경우 첫번째 화살표버튼에
    //css pointer-events:none이 걸리며 클릭이 안되게함
    var productSlider = new Swiper('.product_slider', {
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});