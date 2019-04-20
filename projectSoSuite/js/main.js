$(document).ready(function() {
	let hover = window.matchMedia("(hover)");
	if(!hover.matches) {
		$('.touch').addClass('no-touch');
	}

	$('.header__toggler').on('click', function() {
		$(this).toggleClass('close');
		$('.header__navbar').toggle('show')
	})

	let scroll = $(window).scrollTop();
	
	if(scroll > 0) {
		$('.header').addClass('fixed');
	}

	$(document).on('scroll resize', function() {
		let scroll = $(window).scrollTop();

		if(scroll > 0) {
			$('.header').addClass('fixed');
		} else {
			$('.header').removeClass('fixed');
		}
	})	

	// ScrollReveal
	ScrollReveal().reveal('.expect');
	ScrollReveal().reveal('.suite');
	ScrollReveal().reveal('.gallery');
	ScrollReveal().reveal('.promises');
	ScrollReveal().reveal('.faq');
	ScrollReveal().reveal('.team');
	ScrollReveal().reveal('.contact');
	ScrollReveal().reveal('.footer');

	// Initialize Swiper
	let gallery = new Swiper ('.gallery-container', {
		slidesPerView: 2,
		loop: true,
		preloadImages: false,
		lazy: true,
		navigation: {
			nextEl: '.gallery-button-next',
			prevEl: '.gallery-button-prev',
		},

		breakpoints: {
			767: {
				slidesPerView: 1,
			},
		},
	});

	let faq = new Swiper ('.faq__slider', {
		slidesPerView: 2,
		scrollbar: {
			el: '.swiper-scrollbar',
			hide: false,
		},

		pagination: {
			el: '.faq-pagination',
			type: 'fraction',
			renderFraction: function (currentClass, totalClass) {
				return '<span class="' + currentClass + '"></span>' +
				'<span class="swiper-progress-line">&nbsp;</span>' +
				'<span class="' + totalClass + '"></span>';
			},
		},

		navigation: {
			nextEl: '.faq-button-next',
			prevEl: '.faq-button-prev',
		},

		breakpoints: {
			480: {
				slidesPerView: 1,
			},
		},   
	})

	let hheader = $('.header').height();
	$('a[href^="#"]').on('click', function(e){
		e.preventDefault();
		let anchor = $(this);
		let speed = (($(anchor.attr('href')).offset().top) / 8);

		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top - hheader
		}, speed, 'linear');
	});

	$(document).on('resize', function() {
		let hheader = $('.header').height();
		$('a[href^="#"]').on('click', function(e){
			e.preventDefault();
			let anchor = $(this);
			let speed = (($(anchor.attr('href')).offset().top) / 8);

			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top - hheader
			}, speed, 'linear');
		});
	})
})