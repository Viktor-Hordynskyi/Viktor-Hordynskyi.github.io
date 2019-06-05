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
		slidesPerView: 1,
		spaceBetween: 15,
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
		},
	})
	let supportSwiper = new Swiper ('.support__slider', {
		init: false,
		slidesPerView: 1,
		spaceBetween: 15,
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
		},
	})

	if(window.matchMedia("(max-width: 767px)").matches) {
		introSwiper.init();
		supportSwiper.init();
	}
})

$(window).on('load scroll', function() {
	if($(window).scrollTop() > 0) {
		$('.header').addClass('sticky');
	} else {
		$('.header').removeClass('sticky');
	}
})