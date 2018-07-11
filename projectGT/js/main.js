$(window).on('resize load', function() {
	if(window.matchMedia('(min-width: 1200px)').matches) {
		console.log(window.matchMedia('(min-width: 1200px)').matches);
		$('#gt').children().children().each(function() {
			$(this).hover(function() {
				$(this).find('.tooltiptext').addClass('active');
			}, function() {
				$('.tooltiptext').removeClass('active');
			});
		});
	} else {
		console.log(window.matchMedia('(min-width: 1200px)').matches);
		$('#gt').find('.tooltip-mobile').each(function() {
			$(this).hover(function() {
				$(this).siblings('.tooltiptext').addClass('active');
			}, function() {
				$('.tooltiptext').removeClass('active');
			});
		});
	}	
});