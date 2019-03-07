$(document).ready(function() {
	$('a[href^="#"]').on('click', function(e){
		e.preventDefault();
		let anchor = $(this);
		let speed = (($(anchor.attr('href')).offset().top) / 3)
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top
		}, speed, 'linear');
	});


	$('.navbar-toggler').on('click', function() {
		$('#navbar').toggleClass('show')
	})

	$('.dropdown').on('click', function() {
		$('.dropdown-menu').toggleClass('show')
	})
})