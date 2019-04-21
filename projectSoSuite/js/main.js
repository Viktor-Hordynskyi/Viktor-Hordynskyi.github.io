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

	let hheader = $('.header').height();
	$('a[href^="#"]').on('click', function(e){
		e.preventDefault();
		let anchor = $(this);
		let speed = (($(anchor.attr('href')).offset().top) / 8);

		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top - hheader
		}, speed, 'linear');
	});

	if(window.location.hash == '#contact') {
		location.hash = '';
		let hheader = $('.header').height();
		let anchor = $('#contact');
		let speed = (($(anchor).offset().top) / 8);
		$('html, body').stop().animate({
			scrollTop: $(anchor).offset().top - hheader
		}, speed, 'linear');
	}

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

	$('#back-to-top').on('click', function(){
		$('html, body').stop().animate({scrollTop:0}, 300, "linear");
	})

	// JS for FAQ page
	let height = $('.faq-page__element-answer.open').prop('scrollHeight');
	$('.faq-page__element-answer.open').css('max-height', height);

	$('.accordion').on('click', function() {
		let css = $(this).next().css('max-height');
		let height = $(this).next().prop('scrollHeight');
		let next = $(this).next();

		if(css == '0px') {
			$('.faq-page__element-answer').css('max-height', 0)
			next.css('max-height', height)			
		} else {
			next.css('max-height', 0)
		}
	})

	$('.faq-page__category').on('click', function() {
		let ctgr = $(this).data('target');

		if(!$('#'+ctgr).hasClass('show')) {
			$('.faq-page__description').removeClass('show');
			$('#'+ctgr).addClass('show');

			$('.faq-page__category').removeClass('active');
			$(this).addClass('active');
		}
	})
})