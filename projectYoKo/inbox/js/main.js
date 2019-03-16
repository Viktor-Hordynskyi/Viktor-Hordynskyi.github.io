$(document).ready(function() {
	$('.chat__message').on('click', function() {
		if(!$(this).hasClass('opacity')) {
			$('.chat__message').removeClass('opacity')
			$(this).addClass('opacity');
		}	else {
			$(this).removeClass('opacity');
		}
	})

	$('#toggle').on('click', function() {
		$('.navbar').toggleClass('show')

		if($('.navbar__edit .fas').hasClass('fa-times')) {
			$('.navbar__edit .fas').removeClass('fa-times').addClass('fa-bars')
		} else {
			$('.navbar__edit .fas').removeClass('fa-bars').addClass('fa-times')
		}
	})

	if (window.matchMedia("(max-width: 767.98px)").matches) {
		$('.navbar').removeClass('show')
	}

	$(window).on('resize', function() {
		if (window.matchMedia("(max-width: 767.98px)").matches) {
			$('.navbar').removeClass('show')
		}
	})
})