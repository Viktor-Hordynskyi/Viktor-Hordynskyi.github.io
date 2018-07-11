$(window).on('resize load', function() {
	if(window.matchMedia('(min-width: 1200px)').matches) {
		$('#gt').children().children().each(function() {
			$(this).hover(function() {
				$(this).find('.tooltiptext').addClass('active');
			}, function() {
				$('.tooltiptext').removeClass('active');
			});
		});
	} else {
		$('#gt').find('.tooltip-mobile').each(function() {
			$(this).hover(function() {
				$(this).siblings('.tooltiptext').addClass('active');
			}, function() {
				$('.tooltiptext').removeClass('active');
			});
		});
	}	
});