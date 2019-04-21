$(document).ready(function() {
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
		watchSlidesVisibility: 2,
		loop: true,
		preloadImages: false,
		lazy: {
			loadPrevNext:true,
		},
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
})