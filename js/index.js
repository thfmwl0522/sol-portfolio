/***************** logo ************************/
$(".top-wrap > h1 ").click(function() {
	location.reload();
});

/***************** main btn ************************/
$(".top-wrap > .bar1").click(onShow);
$(".top-wrap > .bar2").click(onShow2);
$(".top-wrap > .bar3").click(onShow3);

var $contWrap = $(".cont-wrapper ul, .cont-wrapper ul > li");
var $naviWrap = $(".navi-wrapper");
var $navi1 = $(".navi-wrapper .navi-wrap > div:nth-child(1)");
var $navi2 = $(".navi-wrapper .navi-wrap > div:nth-child(2)");
var $navi3 = $(".navi-wrapper .navi-wrap > div:nth-child(3)");
var $naviAni = $(".cont-wrap > ul.navi")
var $naviAni1 = $(".cont-wrap > ul.navi-ani > li:nth-child(1)")
var $naviAni2 = $(".cont-wrap > ul.navi-ani > li:nth-child(2)")


function onShow() {
	$contWrap.stop().css("animation-name", "none");
	$contWrap.stop().css("animation-name");
	$naviWrap.css("display", "block");
	$navi1.css("animation-name", "aboutAni");
	$navi2.css("animation-name", "worksAni");
	$navi3.css("animation-name", "contactAni");
	$naviAni.css({"animation-name": "naviAni", "animation-fill-mode": "forwards", "animation-iteration-count": "initial"});
	$naviAni1.css({"animation-name": "workAni", "animation-fill-mode": "forwards", "animation-iteration-count": "initial"});
	$naviAni2.css({"animation-name": "naviAni1", "animation-fill-mode": "forwards", "animation-iteration-count": "initial"});

	$(".header-wrapper .bar2").css("display", "block");
	$(".header-wrapper .bar1").css("display", "none");
	$(".header-wrapper .bar3").css("display", "none");
	$(".header-wrapper .bar4").css("display", "none");
}

function onShow2() {
	$(".navi-wrapper .navi-wrap1 > div").css("display", "block");
	$contWrap.stop().css("animation-name", "none");
	$contWrap.stop().css("animation-name");
	$naviWrap.css("display", "block");
	$navi1.css("animation-name", "").addClass("main-navi1");
	$navi2.css("animation-name", "").addClass("main-navi2");
	$navi3.css("animation-name", "").addClass("main-navi3");
	$naviAni.css({"animation-name": "naviAni2", "animation-fill-mode": "forwards", "animation-iteration-count": "initial"});
	$naviAni1.css({"animation-name": "workAni2", "animation-fill-mode": "forwards", "animation-iteration-count": "initial"});
	$naviAni2.css({"animation-name": "workAni3", "animation-fill-mode": "forwards", "animation-iteration-count": "initial"});

	$(".header-wrapper .bar1").css("display", "block");
	$(".header-wrapper .bar2").css("display", "none");
	$(".header-wrapper .bar3").css("display", "none");
	$(".header-wrapper .bar4").css("display", "none");
/* 	$(".navi-wrapper .navi-wrap > div").show(); */
}

function onShow3() {
	$(".about-wrapper").hide();
	$(".works-wrapper").hide();
	$(".contact-wrapper").hide();
	$contWrap.stop().css("animation-name", "none");
	$contWrap.stop().css("animation-name");
	$naviWrap.css("display", "block");
	$navi1.css("animation-name", "").addClass("main-navi1");
	$navi2.css("animation-name", "").addClass("main-navi2");
	$navi3.css("animation-name", "").addClass("main-navi3");
	$naviAni.css({"animation-name": "naviAni2", "animation-fill-mode": "forwards", "animation-iteration-count": "initial"});
	$naviAni1.css({"animation-name": "workAni2", "animation-fill-mode": "forwards", "animation-iteration-count": "initial"});
	$naviAni2.css({"animation-name": "workAni3", "animation-fill-mode": "forwards", "animation-iteration-count": "initial"});

	$(".header-wrapper .bar1").trigger("click");
	$(".header-wrapper .bar2").css("display", "block");
	$(".header-wrapper .bar3").css("display", "none");
	$(".navi-wrapper .navi-wrap1 > div").css("display", "none");
	$(".navi-wrapper .navi-wrap > div").css("display", "block");
}


/*********************** .navi-bar ***************************/
$(".navi-wrapper .navi-wrap > div").click(onNaviClick);
$(".navi-wrapper .navi-wrap1 > div").click(onNaviClick);

function onNaviClick() {
	var $naviHide = $(".navi-wrapper .navi-wrap > div");
	var $naviWrap = $(".navi-wrapper .navi-wrap1");
	var $navi = $(".navi-wrapper .navi-wrap1 > div");
	var $works = 	$(".works-wrapper");
	var $about = 	$(".about-wrapper");
	var $contact = $(".contact-wrapper");

	$naviWrap.css("display", "block");
	$naviWrap.css("display");
	$navi.css({"position": "absolute"});
	$naviHide.hide();
	$(".header-wrapper .bar3").css("display", "block");
	$(".header-wrapper .bar1").css("display", "none");
	$(".header-wrapper .bar2").css("display", "none");

	var now = $(this).index();

	if(now == 0) {
		$navi.eq(0).addClass("active1").removeClass("active2 active3");
		$navi.eq(1).addClass("active2").removeClass("active1 active3");
		$navi.eq(2).addClass("active3").removeClass("active1 active2");
		$about.css({"left":"300%"}).show();
		$about.css({ "left": "50%", "transform": "translateX(-50%)"});
		$works.hide();
		$contact.hide();
	}
	else if(now == 1) {
		$navi.eq(0).addClass("active3").removeClass("active1 active2");
		$navi.eq(1).addClass("active1").removeClass("active2 active3");
		$navi.eq(2).addClass("active2").removeClass("active1 active3");
		$works.css({"left":"300%"}).show();
		$works.css({ "left": "50%", "transform": "translateX(-50%)" });
		$about.hide();
		$contact.hide();
	}
	else if(now == 2) {
		$navi.eq(0).addClass("active2").removeClass("active1 active3");
		$navi.eq(1).addClass("active3").removeClass("active1 active2");
		$navi.eq(2).addClass("active1").removeClass("active2 active3");
		$contact.css({"left":"300%"}).show();
		$contact.css({ "left": "50%", "transform": "translateX(-50%)" });
		$about.hide();
		$works.hide();
	}


	$(".cont-wrapper ul:nth-child(1)").css("animation-name", "");
	$(".cont-wrapper ul:nth-child(1)").css("animation-name");
	$(".cont-wrapper ul:nth-child(1)").addClass("ani1");

	$(".cont-wrapper ul:nth-child(5)").css("animation-name", "");
	$(".cont-wrapper ul:nth-child(5)").css("animation-name");
	$(".cont-wrapper ul:nth-child(5)").addClass("ani2");

	$(".cont-wrap > ul.navi").css("animation-name", "");
	$(".cont-wrap > ul.navi").css("animation-name");
	$(".cont-wrap > ul.navi").addClass("ani3");

	$(".cont-wrap > ul.navi-ani > li:nth-child(1)").css("animation-name", "");
	$(".cont-wrap > ul.navi-ani > li:nth-child(1)").css("animation-name");
	$(".cont-wrap > ul.navi-ani > li:nth-child(1)").addClass("ani4");

	$(".cont-wrap > ul.navi-ani > li:nth-child(2)").css("animation-name", "");
	$(".cont-wrap > ul.navi-ani > li:nth-child(2)").css("animation-name");
	$(".cont-wrap > ul.navi-ani > li:nth-child(2)").addClass("ani5");

}


/*********************** .works-navi ***************************/

$(function () {

	$("h2.frontend").click(onFront).trigger("click");

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