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

		$(".navi-wrapper .navi-wrap > div:nth-child(1)").css({"top": "5%", "left":"110px", "font-size":"5.8vw", "color":"rgb(255, 195, 29)"});
		$(".navi-wrapper .navi-wrap > div:nth-child(2)").css({"bottom":"5%", "right":"80px", "font-size":"4vw", "color":"rgb(255, 195, 29, 0.6)"});
		$(".navi-wrapper .navi-wrap > div:nth-child(3)").css({"bottom":"20%", "right":"50px", "font-size":"4vw", "color":"rgb(255, 195, 29, 0.6)"});

		$(".about-wrapper").css({"left": "50%", "transform":"translateX(-50%)"});

}
