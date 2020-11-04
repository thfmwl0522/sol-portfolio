/*********************** .navi-bar ***************************/
$(".header-wrapper .navi-bar").click(onShow);

function onShow() {
	$(".cont-wrapper ul, .cont-wrapper ul > li").stop().css("animation-name","none");
	$(".navi-wrapper").css("display","block");
	$(".navi-wrapper .navi-wrap > div:nth-child(1)").css("animation-name","aboutAni");
	$(".navi-wrapper .navi-wrap > div:nth-child(2)").css("animation-name","worksAni");
	$(".navi-wrapper .navi-wrap > div:nth-child(3)").css("animation-name","contactAni");
	$(".cont-wrap > ul.navi").css({"animation-name":"naviAni","animation-fill-mode":"backward"});
	$(".cont-wrap > ul.navi-ani > li").css({"animation-name":"naviAni","animation-fill-mode":"backward"});
}