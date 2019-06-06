$(document).ready(function() {
	$('.menu-toggler').on('click', function() {
		$('.wrapper').toggleClass('menu-show');
	})

	$('.content__textarea').each(function() {
		$(this).on('focusin', function() {
			$(this).addClass('cut');
			$(this).addClass('before');
			$(this).next().addClass('show');
		})

		$(this).on('focusout', function() {
			$(this).removeClass('cut');
			
			$(this).next().removeClass('show');
			
			if($(this).children('textarea').val() == "") {
				$(this).removeClass('before');
			}
		})
	})

	// $('#core1').on('focusout', function() {
	// 	console.log($(this).val())	
	// })
	
})