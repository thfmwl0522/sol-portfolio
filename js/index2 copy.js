$(".navi-wrapper .navi-wrap > div").click(onNaviClick);
$(".navi-wrapper .navi-wrap1 > div").click(onNaviClick);


function onNaviClick() {

	var $naviHide = $(".navi-wrapper .navi-wrap > div");
	var $naviWrap = $(".navi-wrapper .navi-wrap1");
	var $navi = $(".navi-wrapper .navi-wrap1 > div");
	var $works = 	$(".works-wrapper");
	var $about = 	$(".about-wrapper");
	var $contanct = $(".contact-wrapper");



	$naviWrap.css("display", "block");
	$naviWrap.css("display");
	$navi.css({"position": "absolute"});
	$naviHide.hide();

	var now = $(this).index();
	if(now == 0) {
		$navi.eq(0).addClass("active1").removeClass("active2 active3");
		$navi.eq(1).addClass("active2").removeClass("active1 active3");
		$navi.eq(2).addClass("active3").removeClass("active1 active2");
		$about.css({ "left": "50%", "transform": "translateX(-50%)"});
		$works.css({"left": "-300%"});
	}
	else if(now == 1) {
		$navi.eq(0).addClass("active3").removeClass("active1 active2");
		$navi.eq(1).addClass("active1").removeClass("active2 active3");
		$navi.eq(2).addClass("active2").removeClass("active1 active3");
		$works.css({ "left": "50%", "transform": "translateX(-50%)" });
		$about.css({"left": "-300%"});
	}
	else if(now == 2) {
		$navi.eq(0).addClass("active2").removeClass("active1 active3");
		$navi.eq(1).addClass("active3").removeClass("active1 active2");
		$navi.eq(2).addClass("active1").removeClass("active2 active3");
	}

	$(".cont-wrapper ul:nth-child(1)").css("animation-name", "");
	$(".cont-wrapper ul:nth-child(1)").css("animation-name");
	$(".cont-wrapper ul:nth-child(1)").addClass("ani1");
	/*
	$(".cont-wrapper ul:nth-child(1)").css({"animation-name": "naviAni4", "animation-fill-mode": "forwards", "animation-iteration-count": "initial"});
	$(".cont-wrapper ul:nth-child(5)").css({"animation-name": "naviAni3", "animation-fill-mode": "forwards", "animation-iteration-count": "initial"});
	$(".cont-wrap > ul.navi").css({"animation-name": "naviAni5","animation-fill-mode": "forwards","animation-iteration-count": "initial"});
	$(".cont-wrap > ul.navi-ani > li:nth-child(1)").css({"animation-name": "naviAni6", "animation-fill-mode": "forwards", "animation-iteration-count": "initial"});
	$(".cont-wrap > ul.navi-ani > li:nth-child(2)").css({"animation-name": "naviAni7", "animation-fill-mode": "forwards", "animation-iteration-count": "initial"});

	*/
}
