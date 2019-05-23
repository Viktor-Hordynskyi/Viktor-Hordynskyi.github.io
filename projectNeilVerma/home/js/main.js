$('.parallax').on('load scroll', function() {
	// show navbar when scroll page
	let w_scroll = $(window).scrollTop();
	let navbar = $('.navbar').height();
	let t_top = $('.content').offset().top;	

	if ((t_top-navbar) <= w_scroll) {
		$('.parallax').css({'perspective' : 'none'})
		$('.navbar').addClass('fixed');
	} else {
		$('.parallax').css({'perspective' : '2px'})
		$('.navbar').removeClass('fixed');
	}
})

$(document).ready(function() {
	var mySwiper = new Swiper ('.partners__slider', {
		direction: 'horizontal',
		loop: true,
		speed: 750,
		autoplay: {
			delay: 5000,
		},
		slidesPerView: 4,
		spaceBetween: 20,
		breakpoints: {
	    375: {
	    	slidesPerView: 1,
	    	spaceBetween: 0
	    },
	    576: {
	    	slidesPerView: 2,
	    	spaceBetween: 10
	    },
	    767: {
	    	slidesPerView: 3,
	    	spaceBetween: 20
    }
  }
});

	var mySwiper = new Swiper ('.what__slider', {
		direction: 'horizontal',
		loop: true,
		speed: 400,
		autoplay: {
			delay: 5000,
		},
		slidesPerView: 1,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});

	$("#toggler").on('click', function() {
		$('.navbar__hamburger-menu').toggleClass('show');
		$('.navbar__toggler').toggleClass('close');
	})	
})