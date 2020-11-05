/*********************** .navi-bar ***************************/
$(".header-wrapper .navi-bar").click(onShow);

function onShow() {
	$(".cont-wrapper ul, .cont-wrapper ul > li").stop().css("animation-name","none");
	$(".navi-wrapper").css("display","block");
	$(".navi-wrapper .navi-wrap > div:nth-child(1)").css("animation-name","aboutAni");
	$(".navi-wrapper .navi-wrap > div:nth-child(2)").css("animation-name","worksAni");
	$(".navi-wrapper .navi-wrap > div:nth-child(3)").css("animation-name","contactAni");
	$(".cont-wrap > ul.navi").css({"animation-name":"naviAni","animation-fill-mode":"forwards", "animation-iteration-count":"initial"});
	$(".cont-wrap > ul.navi-ani > li").css({"animation-name":"naviAni","animation-fill-mode":"forwards", "animation-iteration-count":"initial"});
}

/* $(".header-wrapper .navi-bar").on({
	click: function() {
		$(".cont-wrapper ul, .cont-wrapper ul > li").stop().css("animation-name","none");
		$(".navi-wrapper").css("display","block");
		$(".navi-wrapper .navi-wrap > div:nth-child(1)").css("animation-name","aboutAni");
		$(".navi-wrapper .navi-wrap > div:nth-child(2)").css("animation-name","worksAni");
		$(".navi-wrapper .navi-wrap > div:nth-child(3)").css("animation-name","contactAni");
		$(".cont-wrap > ul.navi").css({"animation-name":"naviAni","animation-fill-mode":"forwards", "animation-iteration-count":"initial"});
		$(".cont-wrap > ul.navi-ani > li").css({"animation-name":"naviAni","animation-fill-mode":"forwards", "animation-iteration-count":"initial"});
	},
	click: function() {
		$(".navi-wrapper .navi-wrap > div").css("animation-name","none");
	}
}); */
