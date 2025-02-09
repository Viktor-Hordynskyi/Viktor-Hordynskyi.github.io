$(document).ready(function() {
	$('.orders__tab').each(function() {
		$(this).on('click', function() {
			$('.orders__tab').removeClass('active');
			$(this).addClass('active');

			let cb = $(this).data('target');
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
			$('.markets__current').removeClass('show');
			$('#'+cb).addClass('show');
		});
	})

	const iOS = /iPad/.test(navigator.userAgent)
	if (iOS) {
		let x = window.matchMedia("(min-device-width : 768px) and (max-device-width : 1024px)");
		if (x.matches) {
			$('.home.content').css("min-height", "calc(100vh - 6rem - 6px - 14rem - 63px)");
			$('.markets.content').css("min-height", "calc(100vh - 6rem - 6px - 14rem - 63px)");
		}
	}	
})

$(window).on('resize', function() {
	let orders = $('.orders').height();
	$('.orders').css('bottom', '-'+(orders+6)+'px')
})