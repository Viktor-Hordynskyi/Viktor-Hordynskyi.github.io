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
})