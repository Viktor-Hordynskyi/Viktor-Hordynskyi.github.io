$(document).ready(function() {
	$('.menu-toggler').on('click', function() {
		$('.wrapper').toggleClass('menu-show')
	})

	$('.content__group textarea').each(function() {
		$(this).on('focusin', function() {
			$(this).next().addClass('show')
		})

		$(this).on('focusout', function() {
			$(this).next().removeClass('show')
		})
	})
})