

ww = $(window).width();
$(document).ready(function() {

	// 탑버튼 클릭시 최상단으로 이동
	$('.fixed-btn .btn.top').click(function(){
		gsap.to(window,{
			duration:1,
			scrollTo:{
				y:'html',
				offsetY:0,
			},
			ease: "power4.inOut"
		})
	})


	
});