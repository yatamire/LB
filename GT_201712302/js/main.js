function loading(imgArr, callback) {
	if (imgArr.constructor === Array && imgArr.length > 0) {
		var imgAmount = imgArr.length,
			loadAmount = 0,
			percent;
		for (var i = 0; i < imgAmount; i++) {
			var img = new Image();
			img.src = imgArr[i];
			if (img.complete) {
				_update();
				continue;
			}
			img.onload = function() {
				_update();
			}
		}
	} else {
		alert("载入图片资源出错喽");
	}

	function _update() {
		loadAmount++;
		percent = Math.round(loadAmount * 100 / imgAmount);
		$("#load-progress").text(percent);
		if (percent == 100 && callback) {
			$(".load").remove();
			callback();
		}
	}
}


document.ontouchmove = function(e){
	e.preventDefault();
}


// music
document.addEventListener("WeixinJSBridgeReady", function () {
		audio_player.play();
}, false);
function playClicked(){
    if(audio_player.paused) {
        audio_player.play();
        $(".music").removeClass("off").addClass("on")
    }else{
        audio_player.pause();
        $(".music").removeClass("on").addClass("off")
    }
}
playClicked();

var loadRES = ['img/boc.png','img/img01.png','img/img02.png','img/img03.png','img/img04.png','img/img05.png','img/img06.png','img/img11.png','img/img09.png','img/img08.png','img/img10.png','img/img07.png','img/img12.png','img/img13.png','img/img14.png','img/img15.png','img/img16.png','img/img17.png','img/img18.png','img/img19.png','img/img20.png','img/img21.png','img/img25.png','img/img22.png','img/img24.png','img/img27.png','img/img26.png','img/img23.png','img/img32.png','img/img29.png','img/img30.png','img/img33.png','img/img31.png','img/img28.png','img/img37.png','img/img34.png','img/img39.png','img/img38.png','img/img35.png','img/img36.png','img/img49.png','img/img46.png','img/img50.png','img/img47.png','img/img48.png','img/img51.png','img/img52.png','img/img53.png','img/img54.png','img/img55.png','img/img56.png','img/img57.png','img/img58.png'];



loading(loadRES,function(){

	var windowWidth = $(window).width(),
		windowHeight = $(window).height(),
		$body = $("body");
	if (windowWidth > 640) {
		$body.height(windowHeight).width(windowHeight * 320 / 504);
	} else {
		$body.height(windowHeight);
	}

	var mySwiper = new Swiper ('.swiper-container', {
		direction: 'vertical',
		onSlideChangeEnd: function(swiper){
			if(swiper.isEnd){
				$('.resize').hide();
			}else{
				$('.resize').show();
			}
	  	}
	});

	$('.resize').on('touchend',function(){
		mySwiper.slideNext();
	});

});