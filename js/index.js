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
		$(".cont-wrap > ul.navi-ani > li").css({"animation-name":"naviAni2","animation-fill-mode":"forwards", "animation-iteration-count":"initial"});
	}
	else {
		$(".cont-wrapper ul, .cont-wrapper ul > li").stop().css("animation-name","none");
		$(".navi-wrapper").css("display","block");
		$(".navi-wrapper .navi-wrap > div:nth-child(1)").css("animation-name","aboutAni");
		$(".navi-wrapper .navi-wrap > div:nth-child(2)").css("animation-name","worksAni");
		$(".navi-wrapper .navi-wrap > div:nth-child(3)").css("animation-name","contactAni");
		$(".cont-wrap > ul.navi").css({"animation-name":"naviAni","animation-fill-mode":"forwards", "animation-iteration-count":"initial"});
		$(".cont-wrap > ul.navi-ani > li").css({"animation-name":"naviAni","animation-fill-mode":"forwards", "animation-iteration-count":"initial"});
	}
	isNavi = !isNavi; 
}

$(".navi-wrapper .navi-wrap > div:nth-child(1)").click(onAbout);

function onAbout() {
	$(".cont-wrapper ul:nth-child(1)").css({"animation-name":"naviAni3", "animation-fill-mode":"forwards", "animation-iteration-count":"initial"});
	$(".cont-wrapper ul:nth-child(5)").css({"animation-name":"naviAni3", "animation-fill-mode":"forwards", "animation-iteration-count":"initial"});
	$(".cont-wrap > ul.navi").css({"animation-name":"naviAni4","animation-fill-mode":"forwards", "animation-iteration-count":"initial"});
	$(".cont-wrap > ul.navi-ani > li").css({"animation-name":"naviAni4","animation-fill-mode":"forwards", "animation-iteration-count":"initial"});
	$(".navi-wrapper .navi-wrap > div:nth-child(1)").css({"animation-name":"aboutAni3", "animation-fill-mode":"forwards", "animation-iteration-count":"initial"});
	$(".navi-wrapper .navi-wrap > div:nth-child(2)").css({"animation-name":"aboutAni4", "animation-fill-mode":"forwards", "animation-iteration-count":"initial"});
	$(".navi-wrapper .navi-wrap > div:nth-child(3)").css({"animation-name":"aboutAni4", "animation-fill-mode":"forwards", "animation-iteration-count":"initial"});
}
