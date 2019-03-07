$(document).ready(function() {
	$('a[href^="#"]').on('click', function(e){
		e.preventDefault();
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top
		}, 500, 'linear');
	});

	$('.navbar-toggler').on('click', function() {
		$('#navbar').toggleClass('show')
	})

	$('.dropdown').on('click', function() {
		$('.dropdown-menu').toggleClass('show')
	})
})