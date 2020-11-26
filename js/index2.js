/***************** logo ************************/
$(".top-wrap > h1 ").click(function () {
	location.reload();
});

/***************** navi-bar ************************/
var step = "0";

var $contWrap = $(".cont-wrapper ul, .cont-wrapper ul > li");
var $naviWrap = $(".navi-wrapper");
var $naviAbout = $(".navi-wrapper .navi-wrap > .about");
var $naviWorks = $(".navi-wrapper .navi-wrap > .works");
var $naviCont = $(".navi-wrapper .navi-wrap > .contact");
var $naviAni = $(".cont-wrap > ul.navi")
var $front = $(".cont-wrap > ul.navi");
var $devel = $(".cont-wrap > ul.navi-ani > li:nth-child(1)");
var $erAni = $(".cont-wrap > ul.navi-ani > li:nth-child(2)");


function onShow() {
	if (step === '0') {
		aniShow();
	}
	else if (step === '1') {
		aniHide();
	}
	else if (step === '2') {
		ani3();
	}
}

function aniShow() {
	console.log('ani1');
	step = "1"
	$contWrap.stop().css("animation-name", "none");
	$contWrap.stop().css("animation-name");
	$naviWrap.css("display", "block");
	$naviAbout.css("animation-name", "aboutAni");
	$naviWorks.css("animation-name", "worksAni");
	$naviCont.css("animation-name", "contactAni");
	$naviAbout.css("animation-name");
	$naviWorks.css("animation-name");
	$naviCont.css("animation-name");
	$front.css({ "animation-name": "naviAni" }).addClass("ani");
	$devel.css({ "animation-name": "workAni" }).addClass("ani");
	$erAni.css({ "animation-name": "naviAni1" }).addClass("ani");
}

function ani3() {
	console.log('ani2')
	step = '2'
	$(".navi-wrapper .navi-wrap1 > div").css("display", "block");
	$contWrap.stop().css("animation-name", "none");
	$contWrap.stop().css("animation-name");
	$naviWrap.css("display", "block");
	$naviAbout.css("animation-name", "").addClass("main-navi1");
	$naviWorks.css("animation-name", "").addClass("main-navi2");
	$naviCont.css("animation-name", "").addClass("main-navi3");
	$front.css({ "animation-name": "naviAni2" }).addClass("ani");
	$devel.css({ "animation-name": "workAni2" }).addClass("ani");
	$erAni.css({ "animation-name": "workAni3" }).addClass("ani");

	$naviAbout.removeClass("active1");
	$naviWorks.removeClass("active2");
	$naviCont.removeClass("active3");
}

function ani() {
	console.log('ani3');
	step = '3'
	$(".about-wrapper").hide();
	$(".works-wrapper").hide();
	$(".contact-wrapper").hide();
	$naviWrap.css("display", "none");
	$contWrap.stop().css("animation-name", "none");
	$contWrap.stop().css("animation-name");
	$naviAbout.css("animation-name", "").addClass("main-navi1");
	$naviWorks.css("animation-name", "").addClass("main-navi2");
	$naviCont.css("animation-name", "").addClass("main-navi3");
	$naviAni.css({ "animation-name": "naviAni2" }).addClass("ani");
	$devel.css({ "animation-name": "workAni2" }).addClass("ani");
	$erAni.css({ "animation-name": "workAni3" }).addClass("ani");

	$(".header-wrapper .bar").trigger("click");
}


/***************** Event ************************/
$(".top-wrap > .bar").click(onShow);
$(".navi-wrapper .navi-wrap > div").click(onNaviClick);

function onNaviClick() {
	var $navi = $(".navi-wrapper .navi-wrap > div");
	var $works = $(".works-wrapper");
	var $about = $(".about-wrapper");
	var $contact = $(".contact-wrapper");
	var $web = $(".cont-wrapper ul:nth-child(1)");
	var $port = $(".cont-wrapper ul:nth-child(5)");
	var $front = $(".cont-wrap > ul.navi");
	var $devel = $(".cont-wrap > ul.navi-ani > li:nth-child(1)");
	var $er = $(".cont-wrap > ul.navi-ani > li:nth-child(2)");

	$navi.addClass("active");
	$navi.css("position");
	$navi.css("transition");
	$navi.css("top");
	$navi.css("left");

	var now = $(this).index();

	if (now == 0) {
		$navi.eq(0).addClass("active1").removeClass("active2 active3");
		$navi.eq(1).addClass("active2").removeClass("active1 active3");
		$navi.eq(2).addClass("active3").removeClass("active1 active2");
		$about.css({ "left": "300%" }).show();
		$about.css({ "left": "50%", "transform": "translateX(-50%)" });
		$works.hide();
		$contact.hide();
	}
	else if (now == 1) {
		$navi.eq(0).addClass("active3").removeClass("active1 active2");
		$navi.eq(1).addClass("active1").removeClass("active2 active3");
		$navi.eq(2).addClass("active2").removeClass("active1 active3");
		$works.css({ "left": "300%" }).show();
		$works.css({ "left": "50%", "transform": "translateX(-50%)" });
		$about.hide();
		$contact.hide();
	}
	else if (now == 2) {
		$navi.eq(0).addClass("active2").removeClass("active1 active3");
		$navi.eq(1).addClass("active3").removeClass("active1 active2");
		$navi.eq(2).addClass("active1").removeClass("active2 active3");
		$contact.css({ "left": "300%" }).show();
		$contact.css({ "left": "50%", "transform": "translateX(-50%)" });
		$about.hide();
		$works.hide();
	}


	$web.css("animation-name", "");
	$web.css("animation-name");
	$web.addClass("ani1");

	$port.css("animation-name", "");
	$port.css("animation-name");
	$port.addClass("ani2");

	$front.css("animation-name", "");
	$front.css("animation-name");
	$front.addClass("ani3");

	$devel.css("animation-name", "");
	$devel.css("animation-name");
	$devel.addClass("ani4");

	$er.css("animation-name", "");
	$er.css("animation-name");
	$er.addClass("ani5");
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