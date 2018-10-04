$(document).ready(function() {
	// animate links - anchor(#)
	$('a').on('click', function(){
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top
		}, 1500, 'linear')
		event.preventDefault();
	})
})