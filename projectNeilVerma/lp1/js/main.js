$(document).ready(function() {
	$('.intro-forms__switch').on('click', function() {
		let ctgr = $(this).data('target');

		if(!$('#'+ctgr).hasClass('show')) {
			$('.intro-forms__form').removeClass('show');
			$('#'+ctgr).addClass('show');

			$('.intro-forms__switch').removeClass('active');
			$(this).addClass('active');
		}
	})

	$('#upgrade').on('click', function() {
		let value = $('#upgrade').prop('value');
		let total = $('#total-price').data('value');
		let sum = parseFloat(value) + parseFloat(total);

		if($('#upgrade').prop('checked')) {			
			$('#upgrade-price').text('$' + value);
			
			$('#total-price').text('$' + sum);
		} else {
			$('#upgrade-price').text('$0.00');

			$('#total-price').text('$' + total);
		}
		
	})
})