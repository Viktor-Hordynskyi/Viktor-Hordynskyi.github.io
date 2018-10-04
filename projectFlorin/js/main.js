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
})