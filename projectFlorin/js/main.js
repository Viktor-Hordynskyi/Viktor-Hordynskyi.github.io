$(document).ready(function() {
	// animate links - anchor(#)
	var hh = $('header').innerHeight();
	$('a').on('click', function(){
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top - hh
		}, 1500, 'linear')
		event.preventDefault();
	})

	$('.icon').on('click', function(){
		if($('.header-mobile-menu').hasClass('hide')) {
			$('.header-mobile-menu').removeClass('hide');
			$('.header-mobile-menu').addClass('show');
		} else {
			$('.header-mobile-menu').removeClass('show');
			$('.header-mobile-menu').addClass('hide');
		}
	})
})