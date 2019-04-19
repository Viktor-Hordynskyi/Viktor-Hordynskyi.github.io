$(document).ready(function() {
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
		let speed = (($(anchor.attr('href')).offset().top) / 3)
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top - hheader
		}, speed, 'linear');
	});

	// ScrollReveal
	// ScrollReveal().reveal('.intro');
	ScrollReveal().reveal('.expect', { distance: '10rem' });
	ScrollReveal().reveal('.suite', { distance: '10rem' });
	ScrollReveal().reveal('.gallery', { distance: '10rem' });
	ScrollReveal().reveal('.promises', { distance: '10rem' });
	ScrollReveal().reveal('.faq', { distance: '10rem' });
	ScrollReveal().reveal('.team', { distance: '10rem' });
	ScrollReveal().reveal('.contact', { distance: '10rem' });
	ScrollReveal().reveal('.footer', { distance: '10rem' });

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
  })
})