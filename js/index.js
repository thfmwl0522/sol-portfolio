var step = 0;


var $contWrap = $(".cont-wrapper ul, .cont-wrapper ul > li");
var $naviWrap = $(".navi-wrapper");
var $navi1 = $(".navi-wrapper .navi-wrap > div:nth-child(1)");
var $navi2 = $(".navi-wrapper .navi-wrap > div:nth-child(2)");
var $navi3 = $(".navi-wrapper .navi-wrap > div:nth-child(3)");
var $naviAni = $(".cont-wrap > ul.navi")
var $naviAni1 = $(".cont-wrap > ul.navi-ani > li:nth-child(1)")
var $naviAni2 = $(".cont-wrap > ul.navi-ani > li:nth-child(2)")



function onShow() {
	if(step == 0) {
		ani1();
	}
	else if(step == 1) {
		ani2();
	}
}


function ani1() {
	console.log('ani1');
	step = 1;
	$contWrap.stop().css("animation-name", "none");
	$contWrap.stop().css("animation-name");
	$naviWrap.css("display", "block");
	$navi1.css("animation-name", "aboutAni");
	$navi2.css("animation-name", "worksAni");
	$navi3.css("animation-name", "contactAni");
	$navi1.css("animation-name");
	$navi2.css("animation-name");
	$navi3.css("animation-name");
	$naviAni.css({"animation-name": "naviAni", "animation-fill-mode": "forwards", "animation-iteration-count": "initial"});
	$naviAni1.css({"animation-name": "workAni", "animation-fill-mode": "forwards", "animation-iteration-count": "initial"});
	$naviAni2.css({"animation-name": "naviAni1", "animation-fill-mode": "forwards", "animation-iteration-count": "initial"});
}

function ani2() {
	console.log('ani2');
}



/***************** Event ************************/
$(".top-wrap > .bar1").click(onShow);