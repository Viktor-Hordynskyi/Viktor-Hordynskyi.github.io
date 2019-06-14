$(document).ready(function() {
	$('#show-pas').on('click', function() {
		if($(this).prev().prop('type') == 'password') {
			$(this).prev().attr('type', 'text');
		} else {
			$(this).prev().attr('type', 'password');
		}
	})
})