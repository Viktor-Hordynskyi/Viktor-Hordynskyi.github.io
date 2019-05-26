$(document).ready(function() {
	// scrolling to anchor
	$('a[href^="#"]').on('click', function(e){
		e.preventDefault();
		let anchor = $(this);
		let speed = (($(anchor.attr('href')).offset().top) / 8);

		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top
		}, speed, 'linear');
	});
})