$(document).ready(function() {
	// WOW JS
	new WOW().init();

	// Slick JS
	if ($('.interactive__review--img').children().hasClass('slick-wrapper')) {
		$('.slick-wrapper').slick({
			prevArrow: '.slick-button-prev',
			nextArrow: '.slick-button-next',
			autoplay: true,
			speed: 1000
		});
	}	
})
