/*********************** .navi-bar ***************************/
var isNavi = false;
$(".header-wrapper .navi-bar").on("click", onShow);

function onShow() {
	if (isNavi) {
		$(".cont-wrapper ul, .cont-wrapper ul > li").stop().css("animation-name", "none");
		$(".navi-wrapper").css("display", "block");
		$(".navi-wrapper .navi-wrap > div:nth-child(1)").css({
			"animation-name": "aboutAni2",
			"animation-fill-mode": "forwards",
			"animation-iteration-count": "initial"
		});
		$(".navi-wrapper .navi-wrap > div:nth-child(2)").css({
			"animation-name": "worksAni2",
			"animation-fill-mode": "forwards",
			"animation-iteration-count": "initial"
		});
		$(".navi-wrapper .navi-wrap > div:nth-child(3)").css({
			"animation-name": "contactAni2",
			"animation-fill-mode": "forwards",
			"animation-iteration-count": "initial"
		});
		$(".cont-wrap > ul.navi").css({
			"animation-name": "naviAni2",
			"animation-fill-mode": "forwards",
			"animation-iteration-count": "initial"
		});
		$(".cont-wrap > ul.navi-ani > li:nth-child(1)").css({
			"animation-name": "workAni2",
			"animation-fill-mode": "forwards",
			"animation-iteration-count": "initial"
		});
		$(".cont-wrap > ul.navi-ani > li:nth-child(2)").css({
			"animation-name": "workAni3",
			"animation-fill-mode": "forwards",
			"animation-iteration-count": "initial"
		});

	}
	else {
		$(".cont-wrapper ul, .cont-wrapper ul > li").stop().css("animation-name", "none");
		$(".navi-wrapper").css("display", "block");
		$(".navi-wrapper .navi-wrap > div:nth-child(1)").css("animation-name", "aboutAni");
		$(".navi-wrapper .navi-wrap > div:nth-child(2)").css("animation-name", "worksAni");
		$(".navi-wrapper .navi-wrap > div:nth-child(3)").css("animation-name", "contactAni");
		$(".cont-wrap > ul.navi").css({
			"animation-name": "naviAni",
			"animation-fill-mode": "forwards",
			"animation-iteration-count": "initial"
		});
		$(".cont-wrap > ul.navi-ani > li:nth-child(1)").css({
			"animation-name": "workAni",
			"animation-fill-mode": "forwards",
			"animation-iteration-count": "initial"
		});
		$(".cont-wrap > ul.navi-ani > li:nth-child(2)").css({
			"animation-name": "naviAni1",
			"animation-fill-mode": "forwards",
			"animation-iteration-count": "initial"
		});
	}
	isNavi = !isNavi;
}

$(".navi-wrapper .navi-wrap > div").click(onNaviClick);
$(".navi-wrapper .navi-wrap1 > div").click(onNaviClick);

function onNaviClick() {
	var $naviHide = $(".navi-wrapper .navi-wrap > div");
	var $naviWrap = $(".navi-wrapper .navi-wrap1");
	var $navi = $(".navi-wrapper .navi-wrap1 > div");

	$naviWrap.css("display", "block");
	$naviWrap.css("display");
	$navi.css({"position": "absolute"});
	$naviHide.hide();

	var now = $(this).index();

	if(now == 0) {
		$navi.eq(0).addClass("active1").removeClass("active2 active3");
		$navi.eq(1).addClass("active2").removeClass("active1 active3");
		$navi.eq(2).addClass("active3").removeClass("active1 active2");
	}
	else if(now == 1) {
		$navi.eq(0).addClass("active3").removeClass("active1 active2");
		$navi.eq(1).addClass("active1").removeClass("active2 active3");
		$navi.eq(2).addClass("active2").removeClass("active1 active3");
	}
	else if(now == 2) {
		$navi.eq(0).addClass("active2").removeClass("active1 active3");
		$navi.eq(1).addClass("active3").removeClass("active1 active2");
		$navi.eq(2).addClass("active1").removeClass("active2 active3");
	}
}

/*
function onAbout() {

	var left = '100px';
	var top = '50px';


	$(this).css({ "position": "absolute", "top": $(this).position().top + "px", "left": $(this).position().left + "px" });
	$(this).css("position");
	$(this).css("top");
	$(this).css("left");

	$(".navi-wrapper .navi-wrap1").css("display", "block");

	$(".navi-wrapper .navi-wrap1 > div:nth-child(1)").css({
		"position": "absolute", "top": $(".navi-wrapper .navi-wrap1 > div:nth-child(1)").position().top + "px",
		"left": $(".navi-wrapper .navi-wrap1 > div:nth-child(1)").position().left + "px"
	});
	$(".navi-wrapper .navi-wrap1 > div:nth-child(1)").css("position");
	$(".navi-wrapper .navi-wrap1 > div:nth-child(1)").css("top");
	$(".navi-wrapper .navi-wrap1 > div:nth-child(1)").css("left");

	$(".navi-wrapper .navi-wrap1 > div:nth-child(2)").css({
		"position": "absolute", "top": $(".navi-wrapper .navi-wrap1 > div:nth-child(2)").position().top + "px",
		"left": $(".navi-wrapper .navi-wrap1 > div:nth-child(2)").position().left + "px"
	});
	$(".navi-wrapper .navi-wrap1 > div:nth-child(2)").css("position");
	$(".navi-wrapper .navi-wrap1 > div:nth-child(2)").css("top");
	$(".navi-wrapper .navi-wrap1 > div:nth-child(2)").css("left");

	$(".navi-wrapper .navi-wrap1 > div:nth-child(3)").css({
		"position": "absolute", "top": $(".navi-wrapper .navi-wrap1 > div:nth-child(3)").position().top + "px",
		"left": $(".navi-wrapper .navi-wrap1 > div:nth-child(3)").position().left + "px"
	});
	$(".navi-wrapper .navi-wrap1 > div:nth-child(3)").css("position");
	$(".navi-wrapper .navi-wrap1 > div:nth-child(3)").css("top");
	$(".navi-wrapper .navi-wrap1 > div:nth-child(3)").css("left");





	/*
	$(".navi-wrapper .navi-wrap > div:nth-child(1)").css({
		"top": top,
		"left": left,
		"font-size": "6.4vw",
		"color": "rgb(255, 195, 29)"
	});

	$(".navi-wrapper .navi-wrap1 > div:nth-child(1)").css({
		"top": top,
		"left": left,
		"font-size": "6.4vw",
		"color": "rgb(255, 195, 29)"
	});
	$(".navi-wrapper .navi-wrap1 > div:nth-child(2)").css({
		"top": "calc(100vh - "+ $(".navi-wrapper .navi-wrap1 > div:nth-child(2)").css("font-size") +")",
		"left": "76%",
		"font-size": "4.5vw",
		"color": "rgb(255, 195, 29, 0.6)"
	});
	$(".navi-wrapper .navi-wrap1 > div:nth-child(3)").css({
		"top": "calc(100vh - 9vw)",
		"left": "75%",
		"font-size": "4.5vw",
		"color": "rgb(255, 195, 29, 0.6)"
	});
	$(".navi-wrapper .navi-wrap > div").css("display", "none");

	$(".cont-wrapper ul:nth-child(1)").css({
		"animation-name": "naviAni4",
		"animation-fill-mode": "forwards",
		"animation-iteration-count": "initial"
	});
	$(".cont-wrapper ul:nth-child(5)").css({
		"animation-name": "naviAni3",
		"animation-fill-mode": "forwards",
		"animation-iteration-count": "initial"
	});
	$(".cont-wrap > ul.navi").css({
		"animation-name": "naviAni5",
		"animation-fill-mode": "forwards",
		"animation-iteration-count": "initial"
	});
	$(".cont-wrap > ul.navi-ani > li:nth-child(1)").css({
		"animation-name": "naviAni6",
		"animation-fill-mode": "forwards",
		"animation-iteration-count": "initial"
	});
	$(".cont-wrap > ul.navi-ani > li:nth-child(2)").css({
		"animation-name": "naviAni7",
		"animation-fill-mode": "forwards",
		"animation-iteration-count": "initial"
	});
	*/
	/* 	$(".navi-wrapper .navi-wrap > div:nth-child(1)").addClass("about-navi1");
		$(".navi-wrapper .navi-wrap > div:nth-child(2)").addClass("about-navi2");
		$(".navi-wrapper .navi-wrap > div:nth-child(3)").addClass("about-navi3"); */

	/* 	$(window).resize(function() {
			var winWidth = $(window).width();
			if(winWidth > 991) {
				$(".navi-wrapper .navi-wrap > div:nth-child(1)").css({"top": "3%", "left":"8%", "font-size":"6.4vw", "color":"rgb(255, 195, 29)"});
				$(".navi-wrapper .navi-wrap > div:nth-child(2)").css({"top": "83vh", "left":"76%", "font-size":"4.5vw", "color":"rgb(255, 195, 29, 0.6)"});
				$(".navi-wrapper .navi-wrap > div:nth-child(3)").css({"top": "91vh", "left":"75%", "font-size":"4.5vw", "color":"rgb(255, 195, 29, 0.6)"});
			}
			if(winWidth > 768) {
				$(".navi-wrapper .navi-wrap > div:nth-child(2)").css({"top": "88vh", "left":"70%", "font-size":"5.5vw", "color":"rgb(255, 195, 29, 0.6)"});
				$(".navi-wrapper .navi-wrap > div:nth-child(3)").css({"top": "92vh", "left":"70%", "font-size":"5.5vw", "color":"rgb(255, 195, 29, 0.6)"});
			}
			if(winWidth > 575) {
				$(".navi-wrapper .navi-wrap > div:nth-child(2)").css({"top": "88vh", "left":"70%", "font-size":"6vw", "color":"rgb(255, 195, 29, 0.6)"});
				$(".navi-wrapper .navi-wrap > div:nth-child(3)").css({"top": "92vh", "left":"68%", "font-size":"6vw", "color":"rgb(255, 195, 29, 0.6)"});
				}
				else {
					$(".navi-wrapper .navi-wrap > div:nth-child(2)").css({"top": "90vh", "left":"70%", "font-size":"6vw", "color":"rgb(255, 195, 29, 0.6)"});
					$(".navi-wrapper .navi-wrap > div:nth-child(3)").css({"top": "94vh", "left":"68%", "font-size":"6vw", "color":"rgb(255, 195, 29, 0.6)"});
				}
				$(Window).trigger("resize");
		}); */

	//$(".about-wrapper").css({ "left": "50%", "transform": "translateX(-50%)" });
	/* 	$(".works-wrapper").css({"left": "-300%"});

}
 */
/*
$(".navi-wrapper .navi-wrap1 > div:nth-child(1)").click(onAbout1);

function onAbout1() {
	$(this).css({ "position": "absolute", "top": $(this).position().top + "px", "left": $(this).position().left + "px" });
	$(this).css("position");
	$(this).css("top");
	$(this).css("left");

	$(".navi-wrapper .navi-wrap1 > div:nth-child(2)").css({
		"position": "absolute", "top": $(".navi-wrapper .navi-wrap1 > div:nth-child(2)").position().top + "px",
		"left": $(".navi-wrapper .navi-wrap1 > div:nth-child(2)").position().left + "px"
	});
	$(".navi-wrapper .navi-wrap1 > div:nth-child(2)").css("position");
	$(".navi-wrapper .navi-wrap1 > div:nth-child(2)").css("top");
	$(".navi-wrapper .navi-wrap1 > div:nth-child(2)").css("left");

	$(".navi-wrapper .navi-wrap1 > div:nth-child(3)").css({
		"position": "absolute", "top": $(".navi-wrapper .navi-wrap1 > div:nth-child(3)").position().top + "px",
		"left": $(".navi-wrapper .navi-wrap1 > div:nth-child(3)").position().left + "px"
	});
	$(".navi-wrapper .navi-wrap1 > div:nth-child(3)").css("position");
	$(".navi-wrapper .navi-wrap1 > div:nth-child(3)").css("top");
	$(".navi-wrapper .navi-wrap1 > div:nth-child(3)").css("left");

	$(".navi-wrapper .navi-wrap1 > div:nth-child(1)").css({
		"top": "3%",
		"left": "8%",
		"font-size": "6.4vw",
		"color": "rgb(255, 195, 29)"
	});
	$(".navi-wrapper .navi-wrap1 > div:nth-child(2)").css({
		"top": "83vh",
		"left": "76%",
		"font-size": "4.5vw",
		"color": "rgb(255, 195, 29, 0.6)"
	});
	$(".navi-wrapper .navi-wrap1 > div:nth-child(3)").css({
		"top": "91vh",
		"left": "75%",
		"font-size": "4.5vw",
		"color": "rgb(255, 195, 29, 0.6)"
	});

	$(".about-wrapper").css({ "left": "50%", "transform": "translateX(-50%)" });
	$(".works-wrapper").css({ "left": "-300%" });
}


$(".navi-wrapper .navi-wrap > div:nth-child(2)").click(onWork);

function onWork() {
	$(".navi-wrapper .navi-wrap1").css("display", "block");
	$(this).css({ "position": "absolute", "top": $(this).position().top + "px", "left": $(this).position().left + "px" });
	$(this).css("position");
	$(this).css("top");
	$(this).css("left");


	$(".navi-wrapper .navi-wrap1 > div:nth-child(1)").css({
		"position": "absolute", "top": $(".navi-wrapper .navi-wrap1 > div:nth-child(1)").position().top + "px",
		"left": $(".navi-wrapper .navi-wrap1 > div:nth-child(1)").position().left + "px"
	});
	$(".navi-wrapper .navi-wrap1 > div:nth-child(1)").css("position");
	$(".navi-wrapper .navi-wrap1 > div:nth-child(1)").css("top");
	$(".navi-wrapper .navi-wrap1 > div:nth-child(1)").css("left");

	$(".navi-wrapper .navi-wrap1 > div:nth-child(2)").css({
		"position": "absolute", "top": $(".navi-wrapper .navi-wrap1 > div:nth-child(2)").position().top + "px",
		"left": $(".navi-wrapper .navi-wrap1 > div:nth-child(2)").position().left + "px"
	});
	$(".navi-wrapper .navi-wrap1 > div:nth-child(2)").css("position");
	$(".navi-wrapper .navi-wrap1 > div:nth-child(2)").css("top");
	$(".navi-wrapper .navi-wrap1 > div:nth-child(2)").css("left");

	$(".navi-wrapper .navi-wrap1 > div:nth-child(3)").css({
		"position": "absolute", "top": $(".navi-wrapper .navi-wrap1 > div:nth-child(3)").position().top + "px",
		"left": $(".navi-wrapper .navi-wrap1 > div:nth-child(3)").position().left + "px"
	});
	$(".navi-wrapper .navi-wrap1 > div:nth-child(3)").css("position");
	$(".navi-wrapper .navi-wrap1 > div:nth-child(3)").css("top");
	$(".navi-wrapper .navi-wrap1 > div:nth-child(3)").css("left");

	$(".navi-wrapper .navi-wrap > div:nth-child(2)").css({
		"top": "5%",
		"left": "110px",
		"font-size": "6vw",
		"color": "rgb(255, 195, 29)"
	});

	$(".navi-wrapper .navi-wrap1 > div:nth-child(2)").css({
		"top": "5%",
		"left": "110px",
		"font-size": "6vw",
		"color": "rgb(255, 195, 29)"
	});
	$(".navi-wrapper .navi-wrap1 > div:nth-child(3)").css({
		"top": "80vh",
		"left": "70%",
		"font-size": "4.5vw",
		"color": "rgb(255, 195, 29, 0.6)"
	});
	$(".navi-wrapper .navi-wrap1 > div:nth-child(1)").css({
		"top": "90vh",
		"left": "74%",
		"font-size": "4.5vw",
		"color": "rgb(255, 195, 29, 0.6)"
	});
	$(".navi-wrapper .navi-wrap > div").css("display", "none");

	$(".cont-wrapper ul:nth-child(1)").css({
		"animation-name": "naviAni4",
		"animation-fill-mode": "forwards",
		"animation-iteration-count": "initial"
	});
	$(".cont-wrapper ul:nth-child(5)").css({
		"animation-name": "naviAni3",
		"animation-fill-mode": "forwards",
		"animation-iteration-count": "initial"
	});
	$(".cont-wrap > ul.navi").css({
		"animation-name": "naviAni5",
		"animation-fill-mode": "forwards",
		"animation-iteration-count": "initial"
	});
	$(".cont-wrap > ul.navi-ani > li:nth-child(1)").css({
		"animation-name": "naviAni6",
		"animation-fill-mode": "forwards",
		"animation-iteration-count": "initial"
	});
	$(".cont-wrap > ul.navi-ani > li:nth-child(2)").css({
		"animation-name": "naviAni7",
		"animation-fill-mode": "forwards",
		"animation-iteration-count": "initial"
	});

	$(".works-wrapper").css({ "left": "50%", "transform": "translateX(-50%)" });

}

$(".navi-wrapper .navi-wrap1 > div:nth-child(2)").click(onWork1);

function onWork1() {
	$(this).css({ "position": "absolute", "top": $(this).position().top + "px", "left": $(this).position().left + "px" });
	$(this).css("position");
	$(this).css("top");
	$(this).css("left");

	$(".navi-wrapper .navi-wrap1 > div:nth-child(1)").css({
		"position": "absolute",
		"top": $(".navi-wrapper .navi-wrap1 > div:nth-child(1)").position().top + "px",
		"left": $(".navi-wrapper .navi-wrap1 > div:nth-child(1)").position().left + "px"
	});
	$(".navi-wrapper .navi-wrap1 > div:nth-child(1)").css("position");
	$(".navi-wrapper .navi-wrap1 > div:nth-child(1)").css("top");
	$(".navi-wrapper .navi-wrap1 > div:nth-child(1)").css("left");

	$(".navi-wrapper .navi-wrap1 > div:nth-child(3)").css({
		"position": "absolute",
		"top": $(".navi-wrapper .navi-wrap1 > div:nth-child(3)").position().top + "px",
		"left": $(".navi-wrapper .navi-wrap1 > div:nth-child(3)").position().left + "px"
	});
	$(".navi-wrapper .navi-wrap1 > div:nth-child(3)").css("position");
	$(".navi-wrapper .navi-wrap1 > div:nth-child(3)").css("top");
	$(".navi-wrapper .navi-wrap1 > div:nth-child(3)").css("left");

	$(".about-wrapper").css({ "left": "-300%" });

	$(".navi-wrapper .navi-wrap1 > div:nth-child(2)").css({
		"top": "5%",
		"left": "110px",
		"font-size": "6vw",
		"color": "rgb(255, 195, 29)"
	});
	$(".navi-wrapper .navi-wrap1 > div:nth-child(3)").css({
		"top": "80vh",
		"left": "70%",
		"font-size": "4.5vw",
		"color": "rgb(255, 195, 29, 0.6)"
	});
	$(".navi-wrapper .navi-wrap1 > div:nth-child(1)").css({
		"top": "90vh",
		"left": "74%",
		"font-size": "4.5vw",
		"color": "rgb(255, 195, 29, 0.6)"
	});

	$(".works-wrapper").css({ "left": "50%", "transform": "translateX(-50%)" });
}
*/
/*********************** .works-navi ***************************/

$(function () {
	$("h2.frontend").stop().trigger("click");

	$("h2.frontend").click(onFront);

	function onFront() {
		$("h2.frontend").css("color", " rgb(255, 180, 180)");
		$(".slide1").css("display", "block");
		$(".slide2").css("display", "none");
		$(".slide3").css("display", "none");
		$("h2.backend").css("color", " #fff");
		$("h2.web").css("color", "#fff");
	}

	$("h2.backend").click(onBack);

	function onBack() {
		$(".slide2").css("display", "block");
		$(".slide3").css("display", "none");
		$(".slide1").css("display", "none");
		$("h2.backend").css("color", " rgb(255, 180, 180)");
		$("h2.frontend").css("color", " #fff");
		$("h2.web").css("color", "#fff");
	}

	$("h2.web").click(onWeb);

	function onWeb() {
		$(".wslide-wrap .slide3").css("display", "block");
		$(".wslide-wrap .slide1").css("display", "none");
		$(".wslide-wrap .slide2").css("display", "none");
		$("h2.web").css("color", " rgb(255, 180, 180)");
		$("h2.frontend").css("color", " #fff");
		$("h2.backend").css("color", "#fff");
	}
});

/*********************** .works-wrapper .frontend-slide ***************************/

(function () {
	var datas = [
		{ id: 0, src: '../img/slide-01.png' },
		{ id: 1, src: '../img/slide-02.png' },
		{ id: 2, src: '../img/slide-03.png' },
		{ id: 3, src: '../img/slide-04.png' },
		{ id: 4, src: '../img/slide-01.png' }
	];
	var $wrapper = $(".slide1");
	var $slideWrap = $(".front-slide", $wrapper);
	var $btnPrev = $(".btn-prev", $wrapper);
	var $btnNext = $(".btn-next", $wrapper);
	var $slides = [];
	var idx = 0;
	var lastIdx = datas.length - 1;
	var winWid;
	var target;

	/*********** 사용자 함수 ***********/
	init();

	function init() {
		var i, html;
		for (i in datas) {
			html = '<div class="slide">';
			html += '<img src="' + datas[i].src + '" class="w-100">';
			html += '</div>';
			$slides.push($(html));
		}
		slideInit();
	}

	function slideInit() {
		$btnPrev.off("click").click(onPrev);
		$btnNext.off("click").click(onNext);
		$($slides[idx].clone()).appendTo($slideWrap.empty().attr("style", ""));
		if (idx == 0) $($slides[lastIdx].clone()).prependTo($slideWrap);
		else $($slides[idx - 1].clone()).prependTo($slideWrap);
		for (var i = 1; i <= 3; i++) {
			if (idx + i > lastIdx) $($slides[idx + i - 1 - lastIdx].clone()).appendTo($slideWrap);
			else $($slides[idx + i].clone()).appendTo($slideWrap);
		}
	}

	function ani() {
		$slideWrap.stop().animate({ "left": target + "%" }, 500, slideInit);
	}


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
		if (winWid < 576) target = -200;
		else if (winWid < 768) target = -200;
		else if (winWid < 992) target = -100;
		else target = -66.6666;
		ani();
	}

})();

/*********************** .works-wrapper .backend-slide ***************************/
(function () {
	var datas = [
		{ id: 0, src: '../img/slide-02.png' },
		{ id: 1, src: '../img/slide-02.png' },
		{ id: 2, src: '../img/slide-03.png' },
		{ id: 3, src: '../img/slide-04.png' },
		{ id: 4, src: '../img/slide-01.png' }
	];
	var $wrapper = $(".slide2");
	var $slideWrap = $(".back-slide", $wrapper);
	var $btnPrev = $(".btn-prev", $wrapper);
	var $btnNext = $(".btn-next", $wrapper);
	var $slides = [];
	var idx = 0;
	var lastIdx = datas.length - 1;
	var winWid;
	var target;

	/*********** 사용자 함수 ***********/
	init();

	function init() {
		var i, html;
		for (i in datas) {
			html = '<div class="slide">';
			html += '<img src="' + datas[i].src + '" class="w-100">';
			html += '</div>';
			$slides.push($(html));
		}
		slideInit();
	}

	function slideInit() {
		$btnPrev.off("click").click(onPrev);
		$btnNext.off("click").click(onNext);
		$($slides[idx].clone()).appendTo($slideWrap.empty().attr("style", ""));
		if (idx == 0) $($slides[lastIdx].clone()).prependTo($slideWrap);
		else $($slides[idx - 1].clone()).prependTo($slideWrap);
		for (var i = 1; i <= 3; i++) {
			if (idx + i > lastIdx) $($slides[idx + i - 1 - lastIdx].clone()).appendTo($slideWrap);
			else $($slides[idx + i].clone()).appendTo($slideWrap);
		}
	}

	function ani() {
		$slideWrap.stop().animate({ "left": target + "%" }, 500, slideInit);
	}


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
		if (winWid < 576) target = -200;
		else if (winWid < 768) target = -200;
		else if (winWid < 992) target = -100;
		else target = -66.6666;
		ani();
	}

})();

/*********************** .works-wrapper .web-slide ***************************/
(function () {
	var datas = [
		{ id: 0, src: '../img/slide-04.png' },
		{ id: 1, src: '../img/slide-01.png' },
		{ id: 2, src: '../img/slide-04.png' },
		{ id: 3, src: '../img/slide-04.png' },
		{ id: 4, src: '../img/slide-01.png' }
	];
	var $wrapper = $(".slide3");
	var $slideWrap = $(".web-sldie", $wrapper);
	var $btnPrev = $(".btn-prev", $wrapper);
	var $btnNext = $(".btn-next", $wrapper);
	var $slides = [];
	var idx = 0;
	var lastIdx = datas.length - 1;
	var winWid;
	var target;
	var interval;

	/*********** 사용자 함수 ***********/
	init();

	function init() {
		var i, html;
		for (i in datas) {
			html = '<div class="slide">';
			html += '<img src="' + datas[i].src + '" class="w-100">';
			html += '</div>';
			$slides.push($(html));
		}
		slideInit();
	}

	function slideInit() {
		$btnPrev.off("click").click(onPrev);
		$btnNext.off("click").click(onNext);
		$($slides[idx].clone()).appendTo($slideWrap.empty().attr("style", ""));
		if (idx == 0) $($slides[lastIdx].clone()).prependTo($slideWrap);
		else $($slides[idx - 1].clone()).prependTo($slideWrap);
		for (var i = 1; i <= 3; i++) {
			if (idx + i > lastIdx) $($slides[idx + i - 1 - lastIdx].clone()).appendTo($slideWrap);
			else $($slides[idx + i].clone()).appendTo($slideWrap);
		}
	}

	function ani() {
		$slideWrap.stop().animate({ "left": target + "%" }, 500, slideInit);
	}


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
		if (winWid < 576) target = -200;
		else if (winWid < 768) target = -200;
		else if (winWid < 992) target = -100;
		else target = -66.6666;
		ani();
	}

})();