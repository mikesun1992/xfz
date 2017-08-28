$(document).ready(function() {

	//顶部banner begin
	var llq = navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.split(";")[1].replace(/[ ]/g, "");
	if (llq == "MSIE7.0" || llq == "MSIE8.0" || llq == "MSIE9.0") {
		$(".txtBg").removeClass('headline').addClass("headline2");
		$('.delay').addClass('show');
	} else {
		$(".txtBg").addClass("headline");
		$('.delay').removeClass('show');
	}
	//顶部banner end

	$('.banner .txtBg').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
		$('.banner .subline').show().addClass('zoomIn animated');
		$('.banner .arrow').show();
	});

	//鼠标监听 begin
	var flag = true;
	window.onscroll = function() {
			var t = document.documentElement.scrollTop || document.body.scrollTop;
			if (flag) {
				if (t > 0 && t < 990) {
					$("html,body").animate({
						"scrollTop": "990px"
					}, 500);
					flag = false;
				}
			}
		}
		//鼠标监听 end

	var topslides = new Swiper('.topslides', {
		loop: true,
		// 分页器
		pagination: '.swiper-pagination',
		paginationClickable: true
	});
	$('.swiper-prev').on('click', function(e) {
		e.preventDefault()
		topslides.swipePrev()
	});
	$('.swiper-next').on('click', function(e) {
		e.preventDefault()
		topslides.swipeNext()
	});

	// 重磅推荐
	var zbtj = new Swiper('.zbtj .swiper-container', {
		loop: true,
		slidesPerView: 3,
		slidesPerGroup: 1
	});
	$('.zbtj-prev').on('click', function(e) {
		e.preventDefault()
		zbtj.swipePrev()
	});
	$('.zbtj-next').on('click', function(e) {
		e.preventDefault()
		zbtj.swipeNext()
	});

	$('.zbtj .swiper-slide').hover(function() {
		$(this).find('.mask, .qrcode').fadeIn();
	}, function() {
		$(this).find('.mask, .qrcode').fadeOut();
	});


	var hdpics = new Swiper('.hdpics', {
		loop: true,
		pagination: '.hdpagi',
		paginationClickable: true
	});
	$('.hdpics .prev').on('click', function(e) {
		e.preventDefault()
		hdpics.swipePrev()
	});
	$('.hdpics .next').on('click', function(e) {
		e.preventDefault()
		hdpics.swipeNext()
	});

	// 特别策划
	var peopleSwiper = new Swiper('.peopleSwiper', {
		loop: true,
		grabCursor: true
	});
	$(".peopleBtnL").click(function() {
		peopleSwiper.swipePrev();

	});
	$(".peopleBtnR").click(function() {
		peopleSwiper.swipeNext();
	});

	var secretarySwiper = new Swiper('.secretarySwiper', {
		loop: true,
		grabCursor: true
	});
	$(".secretaryBtnL").click(function() {
		secretarySwiper.swipePrev();
	});
	$(".secretaryBtnR").click(function() {
		secretarySwiper.swipeNext();
	});

	var numberSwiper = new Swiper('.numberSwiper', {
		loop: true,
		grabCursor: true
	});
	$(".numberBtnL").click(function() {
		numberSwiper.swipePrev();
	});
	$(".numberBtnR").click(function() {
		numberSwiper.swipeNext();
	});

	var friendSwiper = new Swiper('.friendSwiper', {
		loop: true,
		grabCursor: true
	});
	$(".friendBtnL").click(function() {
		friendSwiper.swipePrev();
	});
	$(".friendBtnR").click(function() {
		friendSwiper.swipeNext();
	});

	// 代表访谈
	var talkswiper = new Swiper('.talkswiper', {
		loop: true,
		slidesPerView: 4,
		slidesPerGroup: 1
	});
	$('.talkswiper-prev').on('click', function(e) {
		e.preventDefault()
		talkswiper.swipePrev()
	});
	$('.talkswiper-next').on('click', function(e) {
		e.preventDefault()
		talkswiper.swipeNext()
	});

	$('.gettalk').click(function() {
		$(this).hide();
		$('.talkswiper').show();
		$('.graymask').animate({
			'margin-top': '0px'
		}, 2000, function() {
			$('.graymask .ctrl').show('slow');
		});
		$('.bk6').fadeTo(1000, 0.3, function() {
			$(this).css('background', '#f1f1f1');
		}).fadeTo('slow', 1);
	});

	$('.talkswiper .swiper-slide').hover(function() {
		$(this).find('.hide').fadeIn();
	}, function() {
		$(this).find('.hide').fadeOut();
	});

	// 往届回顾
	var reviewswiper = new Swiper('.reviewswiper', {
		loop: true
	});
	$('.reviewswiper-prev').on('click', function(e) {
		e.preventDefault()
		reviewswiper.swipePrev()
	});
	$('.reviewswiper-next').on('click', function(e) {
		e.preventDefault()
		reviewswiper.swipeNext()
	});

	//视频列表上下选择
	$(".videoList li:first").addClass("active");
	var top = 0;
	$(".video_prev").click(function() {
		if ($(".videoList li:first").hasClass("active")) {
			return false;
		}
		$(".videoList li").siblings(".active").removeClass("active").prev().addClass("active");
		$(".video").find("img").attr("src", $(".videoList .active").attr("data-img"));
		$(".video").find("a").attr("href", $(".videoList .active h4").attr("data-link"));
		if ($(".videoList li:lt(3)").hasClass("active")) {
			top = top - 101;
			$(".videoList ul").scrollTop(top);

		}
	})

	$(".video_next").click(function() {
		if ($(".videoList li:last").hasClass("active")) {
			return false;
		}
		$(".videoList li").siblings(".active").removeClass("active").next().addClass("active");
		$(".video").find("img").attr("src", $(".videoList .active").attr("data-img"));
		$(".video").find("a").attr("href", $(".videoList .active h4").attr("data-link"));
		if ($(".videoList li:gt(3)").hasClass("active")) {
			top = top + 101;
			$(".videoList ul").scrollTop(top);

		}
	});



	//返回顶部
	function getck(e) {
		for (var t = 0; t < acookie.length; t++) {
			var n = acookie[t].split("=");
			if (e == n[0]) return n.length > 1 ? unescape(n[1]) : ""
		}
		return ""
	}

	function showbtmShareLayer() {
		if (is_open) return;
		if (getck("btmShareLayer") == "") $("#btmShareLayer").fadeIn(1e3), is_open = !0;
		else {
			var e = convertdate(getck("btmShareLayer")),
				t = new Date,
				n = Number(t.getTime()) - Number(e.getTime());
			n >= 864e5 && (document.cookie = "btmShareLayer=", $("#btmShareLayer").fadeIn(1e3), is_open = !0)
		}
	}

	function convertdate(e) {
		var t = e;
		t = t.replace(":", "-"), t = t.replace(":", "-"), t = t.replace(" ", "-");
		var n = new Date(Number(t.split("-")[0]), Number(t.split("-")[1]) - 1, Number(t.split("-")[2]), Number(t.split("-")[3]), Number(t.split("-")[4]), Number(t.split("-")[5]));
		return n
	}

	function setbtmShareLayerck() {
		var e = new Date,
			t = e.getFullYear() + "-" + (Number(e.getMonth()) + 1) + "-" + e.getDate() + " " + e.getHours() + ":" + e.getMinutes() + ":" + e.getSeconds();
		document.cookie = "btmShareLayer=" + t
	}



//视频列表选择
$(".videoList li").click(function() {
	$(".videoList li").removeClass("active");
	$(this).addClass("active");
	$(".video img").attr("src", $(this).attr("data-img"));
	$(".video a").attr("href", $(this).find("h4").attr("data-link"));
});



//特别策划
$('.specialIcon').first().click(function() {
	$('.people').css({
		'opacity': '1',
		"z-index": "999"
	});
	$('.specialIcon').last().css('display', 'none');
})
$('.close').first().click(function() {
	$('.people').css({
		'opacity': '1',
		"z-index": "-9"
	});
	$('.specialIcon').last().css('display', 'block');
})
$('.specialIcon').eq(1).click(function() {
	$('.secretary').css({
		'opacity': '1',
		"z-index": "999"
	});
	$('.specialIcon').last().css('display', 'none');
})
$('.close').eq(1).click(function() {
	$('.secretary').css({
		'opacity': '0',
		"z-index": "-9"
	});
	$('.specialIcon').last().css('display', 'block');
})
$('.specialIcon').eq(2).click(function() {
	$('.number').css({
		'opacity': '1',
		"z-index": "999"
	});
	$('.specialIcon').first().css('display', 'none');
})
$('.close').eq(2).click(function() {
	$('.number').css({
		'opacity': '0',
		"z-index": "-9"
	});
	$('.specialIcon').first().css('display', 'block');
})
$('.specialIcon').last().click(function() {
	$('.friend').css({
		'opacity': '1',
		"z-index": "999"
	});
	$('.specialIcon').first().css('display', 'none');
})
$('.close').last().click(function() {
	$('.friend').css({
		'opacity': '0',
		"z-index": "-9"
	});
	$('.specialIcon').first().css('display', 'block');
})

//特别策划 end

//最新播报  begin
$('#zxbbBox2').html($('#zxbbBox1').html());
var demo = document.getElementById("zxbbScroll");
var demo1 = document.getElementById("zxbbBox1");
var demo2 = document.getElementById("zxbbBox2");

function zxbb() {
	if ((demo.scrollLeft - demo2.offsetWidth) >= 0) {
		demo.scrollLeft -= demo1.offsetWidth;
	} else {
		demo.scrollLeft++;
	}
}
var zxbbvar = setInterval(zxbb, 30);
$('#zxbbScroll').mouseenter(function() {
		clearInterval(zxbbvar);
	}).mouseleave(function() {
		zxbbvar = setInterval(zxbb, 30);
	})
	//最新播报  end