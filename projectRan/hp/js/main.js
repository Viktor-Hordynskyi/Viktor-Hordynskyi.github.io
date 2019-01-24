$(document).ready(function() {
	new WOW().init();
	
	$('a').on('click', function(e){
		e.preventDefault();
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top
		}, 500, 'linear');
	});

	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    $(".footer").find('.wow').removeClass (function (index, className) {
	    return (className.match (/(^|\s)wow fadeIn\S+/g) || []).join(' ');
		});
	}
});