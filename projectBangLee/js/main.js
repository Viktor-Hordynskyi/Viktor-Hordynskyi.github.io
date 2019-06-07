$(document).ready(function() {
	// scrolling to anchor
	let hheader = $('.header').innerHeight();

	$('a[href^="#"]').on('click', function(e){
		e.preventDefault();
		let anchor = $(this);
		let speed = (($(anchor.attr('href')).offset().top) / 8);

		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top - hheader
		}, speed, 'linear');
	});

	$('.navbar__toggler').on('click', function() {
		$('.navbar__links').toggleClass('show');
		$('.header').toggleClass('show');
	})
})

$(window).on('load resize', function() {
	// initialize Swiper
	let introSwiper = new Swiper ('.intro__slider', {
		init: false,
		slidesPerView: 3,
		spaceBetween: 15,
		noSwiping: true,
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable:true,
		},
		watchOverflow: true,
		breakpoints: {
			767: {
				slidesPerView: 1,
				noSwiping: false,
			}
		}
	});

	let supportSwiper = new Swiper ('.support__slider', {
		init: false,
		slidesPerView: 3,
		spaceBetween: 15,
		noSwiping: true,
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable:true,
		},
		watchOverflow: true,
		breakpoints: {
			767: {
				slidesPerView: 1,
				noSwiping: false,
			}
		}
	});

	if(this.matchMedia("(max-width: 767px)").matches) {
		introSwiper.init(true);
		$('.intro__element').removeClass('el-w');
		supportSwiper.init(true);
		$('.support__element').removeClass('sup-w');
	} else {
		$('.intro__element').addClass('el-w');
		$('.support__element').addClass('sup-w');
	}
})

$(window).on('load scroll', function() {
	if($(window).scrollTop() > 0) {
		$('.header').addClass('sticky');
	} else {
		$('.header').removeClass('sticky');
	}
})