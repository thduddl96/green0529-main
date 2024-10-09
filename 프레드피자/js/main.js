// 섹션1 -------------------------------------------------------------------------------------------------

// 비주얼 스와이퍼
var s1_swiper = new Swiper(".visual-swiper", {
    speed:800,
    loop:true,
    // touchRatio: 0,
    autoplay:{
        delay:3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
    navigation: {
        nextEl: ".visual-swiper .swiper-button-next",
        prevEl: ".visual-swiper .swiper-button-prev",
    },
    on: {
        slideChange : function () {
            // console.log(this.realIndex);
            $('.main .s1 .txt-box h2 strong').eq(this.realIndex).addClass('on').siblings().removeClass('on');
            $('.main .s1 .txt-box h2 small span').eq(this.realIndex).find('em').addClass('on');
            $('.main .s1 .txt-box h2 small span').eq(this.realIndex).siblings().find('em').removeClass('on');
        }
    }
});

// 768일땐 비주얼 이미지 고정
if(ww <= 768){
	$('	.main .s1 .swiper-slide img').css('height',`${$(window).height()}`);
}


// 현재 슬라이드 인덱스 텍스트로 전달
s1_swiper.on('transitionEnd',function(){
    let s1_slide_idx = s1_swiper.realIndex + 1;
    $('.s1 .txt-box .slide-control .now-count').text(`0${s1_slide_idx}`)
})


ScrollTrigger.saveStyles('.s1 .txt-box');

let s1_tl01 = gsap.timeline()
.from('.s1 .txt-box',{x:'-20%',opacity:0})
.fromTo(
    '.s1 .txt-box h2 strong',
    {background: 'linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(0,0,0,0.20772058823529416) 0%)'},
    {
        background: 'linear-gradient(135deg, rgba(255,255,255,1) 100%, rgba(0,0,0,0.20772058823529416) 100%)',
        duration:1.5,
    }
)
.from('.s1 .txt-box h2 small span',{y:'100%'},'-=1')
.from('.s1 .txt-box .slide-control',{opacity:0},'-=0.5')
.to({},{delay:3})


ScrollTrigger.matchMedia({
    '(min-width:1025px)':function(){
        // 섹션2 아래서 올라오는거
        ScrollTrigger.create({
            trigger:'.s1',
            start:'top top',
            // end:'+=250%',
			end:'+=100%',
            pin:true,
            // animation:s1_tl01,
            // scrub:1,
        })

        gsap.timeline({
            scrollTrigger:{
                trigger:'.s1',
                // end:'100%',
                scrub:1,
            }
        })
        .to('.s2',{marginTop:'-100vh',})
    },
    '(max-width:1024px)':function(){

    }
})

// 섹션2 -------------------------------------------------------------------------------------------------
var s2_swiper = new Swiper(".s2-swiper", {
    centeredSlides:true,
    loopAdditionalSlides : 3,
    // spaceBetween:48,
    loop:true,
    navigation: {
    nextEl: ".s2-swiper .swiper-button-next",
    prevEl: ".s2-swiper .swiper-button-prev",
    },
    breakpoints: {
        0:{
            slidesPerView: 1.5,
            spaceBetween: 24,
        },
        768: {
            slidesPerView: 3.2,  //브라우저가 768보다 클 때
            spaceBetween: 24,
        },
        1281: {
            slidesPerView: 4.3,  //브라우저가 1024보다 클 때
            spaceBetween: 48,
        },
    },
});

// gsap.timeline({
// 	scrollTrigger:'.s2',
// 	start:'bottom top',
// 	end:200,
// 	toggleActions:'play none none reverse'
// })
gsap.from('.s2 .tit span',{
    y:'-100%',
    scrollTrigger:{
        trigger:'.s2 .tit span',
        start:'top 90%',
        end:'200',
        toggleActions:'play none none reverse',
        // markers:true,
    }
})

gsap.from('.s2 .s2-swiper',{
    opacity:0, y:'50',
    scrollTrigger:{
        trigger:'.s2 .s2-swiper',
        start:'top 90%',
        end:'200',
        toggleActions:'play none none reverse',
        // markers:true,
    }
})

// 피자 호버
// $('.s2 .s2-swiper .swiper-slide').hover(function(){
// 		$(this).css('zIndex','10');
// 		$(this).find('.img-box img').css('transform','scale(1.2)')
// 	},function(){
// 		$(this).css('zIndex','0');
// 		$(this).find('.img-box img').css('transform','scale(1.1)')
// 	}
// )

// 섹션3 -------------------------------------------------------------------------------------------------
// 마퀴 텍스트
// let marquee_box = document.querySelectorAll(".marquee");
// marquee_box.forEach((item, idx, arr) => {
//     let item_p = item.querySelector(".txt");
//     let marqueeClone01 = item_p.cloneNode(true);
//     let marqueeClone02 = item_p.cloneNode(true);
//     let marqueeClone03 = item_p.cloneNode(true);
//     item_p.after(marqueeClone01);
//     item_p.after(marqueeClone02);
//     item_p.after(marqueeClone03);
// });

// 비디오 재생
videoPlayCount = 0;
function videoPlay(){
	videoPlayCount = 1;
	var src = $('.main .s3 iframe').attr('src');
	$('.main .s3 iframe').attr('src', src + '&autoplay=1');
}

ScrollTrigger.create({
	trigger:'.s3 .video-box',
	start:'top 80%',
	// markers:true,
	onEnter:()=>{
		if(videoPlayCount === 0){
			videoPlay();
		}
	}
})

gsap.from('.s3 .video-box',
    {
        opacity:0,y:-50,duration:1,
        scrollTrigger:{
            trigger:'.s3 .video-box',
            start:'top 90%',
            end:'200',
            toggleActions:'play none none reverse',
        }
    }
)

gsap.from('.s3 .marquee.n1',
    {
        opacity:0,duration:1,
        scrollTrigger:{
            trigger:'.s3 .marquee.n1',
            start:'top 80%',
            end:'200',
            toggleActions:'play none none reverse'
        }
    }
)

gsap.from('.s3 .marquee.n2',
    {
        opacity:0,duration:1,
        scrollTrigger:{
            trigger:'.s3 .marquee.n2',
            start:'top 80%',
            end:'200',
            toggleActions:'play none none reverse'
        }
    }
)

// 섹션4 -------------------------------------------------------------------------------------------------

    /*
    let wps = $(window).innerWidth();

    if(wps < 701){
        $('.main .s4._add .top .s4-swiper .swiper-slide._none').remove();
    }
    

    function s4_swiperInit(){
        return new Swiper(".s4-swiper", {
            slidesPerView: 1,
            spaceBetween: 24,
            speed: 800,
            loop: true,
            navigation: {
                nextEl: ".s4 .swiper-button-next",
                prevEl: ".s4 .swiper-button-prev",
            },
            breakpoints: {
                0:{
                    // loop:true,
                    // loopAdditionalSlides : 2,
                },
                701: {
                    // loop:false,
                },
            },
        });
    };

    var s4_swiper = s4_swiperInit();
    // s4_swiper.slideTo(1, 1, false);
    let swiper_resize;

    

    // 리사이즈시 스와이퍼 삭제후 재선언
    $(window).resize(function(){
        clearTimeout(swiper_resize);
        if(ww >= 1024){
            setTimeout(function(){
                s4_swiper.update();
                s4_swiper.slideTo(0, 0, false); // 1번 슬라이드로 이동
                s4_swiper.destroy();
                s4_swiper = s4_swiperInit();
            },200)
        }
    })

    gsap.from('.s4 .top .s4-swiper',{
        opacity:0,duration:0.8,
        scrollTrigger:{
            trigger:'.s4',
            start:'top 70%',
            end:'200',
            toggleActions:'play none none reverse',
        }
    })

    gsap.timeline({
        scrollTrigger:{
            trigger:'.s4 .bottom .wrap',
            start:'top 80%',
            end:'200',
            toggleActions:'play none none reverse'
        }
    })
    .from('.s4 .bottom .wrap .img-box img',0.8,{scale:1.2,filter:'blur(10px)'})
    .from('.s4 .bottom .wrap .title-txt-box span',0.6,{opacity:0,y:'-100%'},'-=0.5')
    .from('.s4 .bottom .wrap .title-txt-box .more-btn',0.6,{opacity:0},'-=0.5')

    gsap.from('.s4 .obj-box .n1', {
        opacity: 0,
        right: '-100px',
        duration:0.6,
        scrollTrigger: {
            trigger: '.s4 .obj-box .n1',
            start: 'center center',
            end: '200',
            toggleActions: 'play none none reverse',
        }
    });

    gsap.from('.s4 .obj-box .n2', {
        opacity: 0,
        left: '-100px',
        duration:0.6,
        scrollTrigger: {
            trigger: '.s4 .obj-box .n2',
            start: 'top 80%',
            end: '200',
            toggleActions: 'play none none reverse',
        }
    });

    */

    let se04swiper = new Swiper(".se04sw", {
        slidesPerView: 1,
        spaceBetween: 12,
        speed: 800,
        loop: true,
        navigation: {
            nextEl: ".s4 .swiper-button-next",
            prevEl: ".s4 .swiper-button-prev",
        },
        breakpoints: {
            700: {
                slidesPerView: 1.12,
                spaceBetween: 24,
            },
        },
        on: {
            slideChange : function() {
                let wp = $(window).innerWidth();

                if(wp > 700){
                    $('.main .s4._add .absol').addClass('down');
                }

            },
            slideChangeTransitionEnd : function () {
                let wp = $(window).innerWidth();
                
                if(wp > 700){
                    $('.main .s4._add .absol').removeClass('down');
                }
                
            }
        },
    });
    


// 섹션5 -------------------------------------------------------------------------------------------------

ScrollTrigger.matchMedia({
    '(max-width:1024px)':function(){
        gsap.timeline({
            scrollTrigger:{
                trigger:'.s5',
                start:'top 90%',
                end:'200',
                toggleActions:'play none none reverse',
            }
        })
        .from('.s5 .bg img',{scale:1.3,duration:2})
        .from('.s5 .tit span',{opacity:0,y:'50'},'-=2')
        .from('.s5 .tit small',{opacity:0,y:'50'},'-=1.75')
        .from('.s5 .search-store .search-area',{opacity:0, y:'100%'},'-=1.5')
        .from('.s5 .search-store .search-area',{maxWidth:'48px'},'-=1')
        .from('.s5 .search-store .search-area .bar small span',{opacity:0, y:'100%'},'-=0.5')
    },
    '(min-width:1025px)':function(){
        gsap.timeline({
            scrollTrigger:{
                trigger:'.s5',
                start:'top 90%',
                end:'200',
                toggleActions:'play none none reverse',
            }
        })
        .from('.s5 .bg img',{scale:1.3,duration:2})
        .from('.s5 .tit span',{opacity:0,y:'50'},'-=2')
        .from('.s5 .tit small',{opacity:0,y:'50'},'-=1.75')
        .from('.s5 .search-store .search-area',{opacity:0, y:'100%'},'-=1.5')
        .from('.s5 .search-store .search-area',{maxWidth:'72px'},'-=1')
        .from('.s5 .search-store .search-area .bar small span',{opacity:0, y:'100%'},'-=0.5')
    }
})


// 섹션6 -------------------------------------------------------------------------------------------------

gsap.timeline({
    scrollTrigger:{
        trigger:'.s6 .tit',
        start:'top 80%',
        end:'200',
        toggleActions:'play none none reverse'
    },
    defaults: {
        duration: 0.5, // Corrected typo from druation to duration
    }
})
.from('.s6 .tit span',{opacity:0,y:'-50'})
.from('.s6 .tit small',{opacity:0,y:'-50'},'-=50%')
.from('.s6 ul li:nth-of-type(1)',{opacity:0,y:'-50'},'-=70%')
.from('.s6 ul li:nth-of-type(2)',{opacity:0,y:'-50'},'-=70%')
.from('.s6 ul li:nth-of-type(3)',{opacity:0,y:'-50'},'-=70%')

// 섹션7 -------------------------------------------------------------------------------------------------

let s7_box = gsap.utils.toArray('.s7 .box');

s7_box.forEach(function(item){
    gsap.from(item,{
        opacity:0,y:'-80',
        scrollTrigger:{
            trigger:item,
            start:'top 80%',
            end:'200',
            toggleActions:'play none none reverse',
        }
    })
})

ScrollTrigger.saveStyles('.main .s7 .bg');
ScrollTrigger.saveStyles('.main .s7 .bg img');

ScrollTrigger.matchMedia({
    '(max-width:1024px)':function(){
        gsap.from('.s7 .bg img',{
            scale:1.2,duration:1,
            scrollTrigger:{
                trigger:'.s7',
                start:'top center',
                end:'200',
                toggleActions:'play none none reverse'
            }
        })
    },
    '(min-width:1025px)':function(){
        gsap.to('.s7 .bg img',{
            y:'-20%',
            scrollTrigger:{
                trigger:'.s7',
                start:'top bottom',
                endTrigger:'footer',
                end:'bottom bottom',
                scrub:1
            }
        })
    }
})