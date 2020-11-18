/*********************** .navi-bar ***************************/
var isNavi = false;
$(".header-wrapper .navi-bar").on("click", onShow);

function onShow() {
	if(isNavi) {
		$(".cont-wrapper ul, .cont-wrapper ul > li").stop().css("animation-name","none");
		$(".navi-wrapper").css("display","block");
		$(".navi-wrapper .navi-wrap > div:nth-child(1)").css({"animation-name":"aboutAni2", "animation-fill-mode":"forwards", "animation-iteration-count":"initial"});
		$(".navi-wrapper .navi-wrap > div:nth-child(2)").css({"animation-name":"worksAni2", "animation-fill-mode":"forwards", "animation-iteration-count":"initial"});
		$(".navi-wrapper .navi-wrap > div:nth-child(3)").css({"animation-name":"contactAni2", "animation-fill-mode":"forwards", "animation-iteration-count":"initial"});
		$(".cont-wrap > ul.navi").css({"animation-name":"naviAni2","animation-fill-mode":"forwards", "animation-iteration-count":"initial"});
		$(".cont-wrap > ul.navi-ani > li:nth-child(1)").css({"animation-name":"workAni2","animation-fill-mode":"forwards", "animation-iteration-count":"initial"});
		$(".cont-wrap > ul.navi-ani > li:nth-child(2)").css({"animation-name":"workAni3","animation-fill-mode":"forwards", "animation-iteration-count":"initial"});

	}
	else {
		$(".cont-wrapper ul, .cont-wrapper ul > li").stop().css("animation-name","none");
		$(".navi-wrapper").css("display","block");
		$(".navi-wrapper .navi-wrap > div:nth-child(1)").css("animation-name","aboutAni");
		$(".navi-wrapper .navi-wrap > div:nth-child(2)").css("animation-name","worksAni");
		$(".navi-wrapper .navi-wrap > div:nth-child(3)").css("animation-name","contactAni");
		$(".cont-wrap > ul.navi").css({"animation-name":"naviAni","animation-fill-mode":"forwards", "animation-iteration-count":"initial"});
		$(".cont-wrap > ul.navi-ani > li:nth-child(1)").css({"animation-name":"workAni","animation-fill-mode":"forwards", "animation-iteration-count":"initial"});
		$(".cont-wrap > ul.navi-ani > li:nth-child(2)").css({"animation-name":"naviAni1","animation-fill-mode":"forwards", "animation-iteration-count":"initial"});
	}
	isNavi = !isNavi; 
}


$(".navi-wrapper .navi-wrap > div:nth-child(1)").click(onAbout);

function onAbout() {
	$(this).css({"position": "absolute", "top": $(this).position().top+"px", "left": $(this).position().left+"px"});
	$(this).css("position");
	$(this).css("top");
	$(this).css("left");

	$(".navi-wrapper .navi-wrap > div:nth-child(2)").css({"position": "absolute", 
		"top": $(".navi-wrapper .navi-wrap > div:nth-child(2)").position().top+"px", 
		"left": $(".navi-wrapper .navi-wrap > div:nth-child(2)").position().left+"px"});
	$(".navi-wrapper .navi-wrap > div:nth-child(2)").css("position");
	$(".navi-wrapper .navi-wrap > div:nth-child(2)").css("top");
	$(".navi-wrapper .navi-wrap > div:nth-child(2)").css("left");

	$(".navi-wrapper .navi-wrap > div:nth-child(3)").css({"position": "absolute", 
	"top": $(".navi-wrapper .navi-wrap > div:nth-child(3)").position().top+"px", 
	"left": $(".navi-wrapper .navi-wrap > div:nth-child(3)").position().left+"px"});
	$(".navi-wrapper .navi-wrap > div:nth-child(3)").css("position");
	$(".navi-wrapper .navi-wrap > div:nth-child(3)").css("top");
	$(".navi-wrapper .navi-wrap > div:nth-child(3)").css("left");


	$(".cont-wrapper ul:nth-child(1)").css({"animation-name":"naviAni4", "animation-fill-mode":"forwards", "animation-iteration-count":"initial"});
	$(".cont-wrapper ul:nth-child(5)").css({"animation-name":"naviAni3", "animation-fill-mode":"forwards", "animation-iteration-count":"initial"});
	$(".cont-wrap > ul.navi").css({"animation-name":"naviAni5","animation-fill-mode":"forwards", "animation-iteration-count":"initial"});
	$(".cont-wrap > ul.navi-ani > li:nth-child(1)").css({"animation-name":"naviAni6","animation-fill-mode":"forwards", "animation-iteration-count":"initial"});
	$(".cont-wrap > ul.navi-ani > li:nth-child(2)").css({"animation-name":"naviAni7","animation-fill-mode":"forwards", "animation-iteration-count":"initial"});

	$(".navi-wrapper .navi-wrap > div:nth-child(1)").css({"top": "5%", "left":"100px", "font-size":"6vw", "color":"rgb(255, 195, 29)"});

	$(".navi-wrapper .navi-wrap > div:nth-child(2)").css({"top": "80vh", "left":"72%", "font-size":"4.5vw", "color":"rgb(255, 195, 29, 0.6)"});
	$(".navi-wrapper .navi-wrap > div:nth-child(3)").css({"top": "90vh", "left":"70%", "font-size":"4.5vw", "color":"rgb(255, 195, 29, 0.6)"});
/* 	$(window).resize(function() { 
		if($(window).width() < 991) {
			$(".navi-wrapper .navi-wrap > div:nth-child(2)").css({"top": "88vh", "left":"70%", "font-size":"5.5vw", "color":"rgb(255, 195, 29, 0.6)"});
			$(".navi-wrapper .navi-wrap > div:nth-child(3)").css({"top": "92vh", "left":"70%", "font-size":"5.5vw", "color":"rgb(255, 195, 29, 0.6)"});
		}
		if($(window).width() < 770) {
			$(".navi-wrapper .navi-wrap > div:nth-child(2)").css({"top": "88vh", "left":"70%", "font-size":"6vw", "color":"rgb(255, 195, 29, 0.6)"});
			$(".navi-wrapper .navi-wrap > div:nth-child(3)").css({"top": "92vh", "left":"68%", "font-size":"6vw", "color":"rgb(255, 195, 29, 0.6)"});
		}
		if($(window).width() < 575) {
			$(".navi-wrapper .navi-wrap > div:nth-child(2)").css({"top": "90vh", "left":"70%", "font-size":"6vw", "color":"rgb(255, 195, 29, 0.6)"});
			$(".navi-wrapper .navi-wrap > div:nth-child(3)").css({"top": "94vh", "left":"68%", "font-size":"6vw", "color":"rgb(255, 195, 29, 0.6)"});
			}
	}); */

	$(".about-wrapper").css({"left": "50%", "transform":"translateX(-50%)"});
	$(".works-wrapper").css({"left": "-300%"});

}

$(".navi-wrapper .navi-wrap > div:nth-child(2)").click(onWork);

function onWork() {
	$(this).css({"position": "absolute", "top": $(this).position().top+"px", "left": $(this).position().left+"px"});
	$(this).css("position");
	$(this).css("top");
	$(this).css("left");

	$(".navi-wrapper .navi-wrap > div:nth-child(1)").css({"position": "absolute", 
		"top": $(".navi-wrapper .navi-wrap > div:nth-child(1)").position().top+"px", 
		"left": $(".navi-wrapper .navi-wrap > div:nth-child(1)").position().left+"px"});
	$(".navi-wrapper .navi-wrap > div:nth-child(1)").css("position");
	$(".navi-wrapper .navi-wrap > div:nth-child(1)").css("top");
	$(".navi-wrapper .navi-wrap > div:nth-child(1)").css("left");

	$(".navi-wrapper .navi-wrap > div:nth-child(3)").css({"position": "absolute", 
	"top": $(".navi-wrapper .navi-wrap > div:nth-child(3)").position().top+"px", 
	"left": $(".navi-wrapper .navi-wrap > div:nth-child(3)").position().left+"px"});
	$(".navi-wrapper .navi-wrap > div:nth-child(3)").css("position");
	$(".navi-wrapper .navi-wrap > div:nth-child(3)").css("top");
	$(".navi-wrapper .navi-wrap > div:nth-child(3)").css("left");
	
	$(".about-wrapper").css({"left": "-300%"});

	$(".navi-wrapper .navi-wrap > div:nth-child(2)").css({"top": "5%", "left":"100px", "font-size":"6vw", "color":"rgb(255, 195, 29)"});
	$(".navi-wrapper .navi-wrap > div:nth-child(3)").css({"top": "80vh", "left":"70%", "font-size":"4.5vw", "color":"rgb(255, 195, 29, 0.6)"});
	$(".navi-wrapper .navi-wrap > div:nth-child(1)").css({"top": "90vh", "left":"74%", "font-size":"4.5vw", "color":"rgb(255, 195, 29, 0.6)"});
	
	$(".works-wrapper").css({"left": "50%", "transform":"translateX(-50%)"});
}



























(function(){
	/*********** 전역변수 선언 ***********/
	var datas = [
		{ id: 0, src: '../img/slide-01.png', title: '침대1' },
		{ id: 1, src: '../img/slide-02.png', title: '침대2' },
		{ id: 2, src: '../img/slide-03.png', title: '침대3' },
		{ id: 3, src: '../img/slide-04.png', title: '쇼파4' }
	];

	var $wrapper = $(".slide-wrapper");
	var $slideWrap = $(".slide-wrap", $wrapper); 
	var $btnPrev = $(".btn-prev", $wrapper); 
	var $btnNext = $(".btn-next", $wrapper);
	var $slides = [];		// 모든 .slide
	var idx = 0;
	var lastIdx = datas.length - 1;
	var winWid;					// 현재창의 크기
	var target;
	var interval;

	/*********** 사용자 함수 ***********/
	init();
	function init() {
		var i, html;
		for(i in datas) {
			html  = '<div class="slide">';
			html += '<img src="'+datas[i].src+'" class="w-100">';
			html += '</div>';
			$slides.push($(html));
		}
		slideInit();
/* 		interval = setInterval(onNext, 3000); */
	}

	function slideInit() {
		$btnPrev.off("click").click(onPrev);
		$btnNext.off("click").click(onNext);
		$($slides[idx].clone()).appendTo($slideWrap.empty().attr("style", ""));
		if(idx == 0) $($slides[lastIdx].clone()).prependTo($slideWrap);
		else $($slides[idx - 1].clone()).prependTo($slideWrap);
		for(var i=1; i<=3; i++) {
			if(idx + i > lastIdx) $($slides[idx + i - 1 - lastIdx].clone()).appendTo($slideWrap);
			else $($slides[idx + i].clone()).appendTo($slideWrap);
		}
	}

	function ani() {
		$slideWrap.stop().animate({"left": target+"%"}, 500, slideInit);
	}

	/*********** 이벤트 콜백 ***********/
	function onPrev() {
		$(this).off("click");
		idx = idx == 0 ? lastIdx : idx - 1;
		target = 0;
		ani();
	}
	
	function onNext() {
		$(this).off("click");
		idx = idx == lastIdx ? 0 : idx + 1;
		winWid = $(window).outerWidth();
		if(winWid < 576) target = -200;
		else if(winWid < 768) target = -200;
		else if(winWid < 992) target = -100;
		else target = -66.6666;
		ani();
	}

	/*********** 이벤트 등록 ***********/
/* 	$wrapper.hover(function(){
		clearInterval(interval);
	}, function(){
		interval = setInterval(onNext, 3000);
	});
 */
})();