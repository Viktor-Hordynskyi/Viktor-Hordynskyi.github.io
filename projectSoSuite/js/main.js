$(document).ready(function() {
	// checking, is this a touch device?
	let hover = window.matchMedia("(hover)");
	if(!hover.matches) {
		$('.touch').addClass('no-touch');
	}

	// Open/close header menu (on tablet and mobile)
	$('.header__toggler').on('click', function() {
		$(this).toggleClass('close');
		$('.header__navbar').toggle('show')
	})

	// add a fixed property to header (on load)
	let scroll = $(window).scrollTop();	
	if(scroll > 0) {
		$('.header').addClass('fixed');
	}

	// add a fixed property to header (on scroll and resize)
	$(window).on('scroll resize', function() {
		let scroll = $(window).scrollTop();
		let header = $('.header').height();

		if(scroll > 0) {
			$('.header').addClass('fixed');
		} else {
			$('.header').removeClass('fixed');
		}
	})	

	// scrolling to anchor
	let hheader = $('.header').height();
	$(window).on('resize', function() {
		let hheader = $('.header').height();
	})
	$('a[href^="#"]').on('click', function(e){
		e.preventDefault();
		let anchor = $(this);
		let speed = (($(anchor.attr('href')).offset().top) / 8);

		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top - hheader
		}, speed, 'linear');
	});

	// $(document).on('resize', function() {
	// 	let hheader = $('.header').height();
	// 	$('a[href^="#"]').on('click', function(e){
	// 		e.preventDefault();
	// 		let anchor = $(this);
	// 		let speed = (($(anchor.attr('href')).offset().top) / 8);

	// 		$('html, body').stop().animate({
	// 			scrollTop: $(anchor.attr('href')).offset().top - hheader
	// 		}, speed, 'linear');
	// 	});
	// })

	// scrolling to anchor (#contact) on home page from other pages
	if(window.location.hash == '#contact') {
		location.hash = '';
		let hheader = $('.header').height();
		let anchor = $('#contact');
		let speed = (($(anchor).offset().top) / 8);
		$('html, body').stop().animate({
			scrollTop: $(anchor).offset().top - hheader
		}, speed, 'linear');
	}	

	// Scroll to top
	$('#back-to-top').on('click', function(){
		$('html, body').stop().animate({scrollTop:0}, 300, "linear");
	})

	// JS for FAQ page
	let height = $('.faq-page__element-answer.open').prop('scrollHeight');
	$('.faq-page__element-answer.open').css('max-height', height);

	// scripts on a FAQ page for the accordion
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