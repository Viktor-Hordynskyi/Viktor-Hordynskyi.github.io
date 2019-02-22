$(document).ready(function() {
	$('.orders__tab').each(function() {
		$(this).on('click', function() {
			$('.orders__tab').removeClass('active');
			$(this).addClass('active');

			let cb = $(this).data('target');
			console.log($('#'+cb))
			$('.orders__container').removeClass('show');
			$('#'+cb).addClass('show');
		});
	})

	let orders = $('.orders').height();
	$('.orders').css('bottom', '-'+(orders+6)+'px')

	$(function () {
		$('[data-toggle="tooltip"]').tooltip()
	})

	// markets page - tabs switcher
	$('.markets__tab').each(function() {
		$(this).on('click', function() {
			$('.markets__tab').removeClass('active');
			$(this).addClass('active');

			let cb = $(this).data('target');
			console.log($('#'+cb))
			$('.markets__current').removeClass('show');
			$('#'+cb).addClass('show');
		});
	})
})

$(window).on('resize', function() {
	let orders = $('.orders').height();
	$('.orders').css('bottom', '-'+(orders+6)+'px')
})