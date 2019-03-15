$(document).ready(function() {
	$('.chat__message').on('click', function() {
		if(!$(this).hasClass('opacity')) {
			$('.chat__message').removeClass('opacity')
			$(this).addClass('opacity');
		}	else {
			$(this).removeClass('opacity');
		}
	})	
})