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
})