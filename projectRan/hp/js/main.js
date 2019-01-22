$(document).ready(function() {
	new WOW().init();
	
	$('a').on('click', function(e){
		e.preventDefault();
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top
		}, 500, 'linear');
	});
});