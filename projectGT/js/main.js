$(document).ready(function() {
	$('#gt').children().children().each(function() {
		$(this).hover(function() {
			$(this).find('.tooltiptext').addClass('active');
		}, function() {
			$('.tooltiptext').removeClass('active');
		});
	});
});