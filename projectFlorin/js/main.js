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

// Add indent 88px for scrolling anchor(#)
	// $(document).ready(onScroll);
	// $(document).on("scroll", onScroll);
	// $("a").click(function(e) {
	// 	$(document).off('scroll');
	// 	$('#header a.active').removeClass('active');
	// 	$(this).addClass('active');

	// 	var hash = $(this).attr('href'),
	// 	target = $(hash),
	// 	hh = $('header').innerHeight();

	// 	$('html, body').stop().animate({
	// 		'scrollTop': target.offset().top - hh
	// 	}, 1500, function () {
	// 		$(document).on('scroll', onScroll);
	// 	});
	// });