$(document).ready(function() {
	$('.menu-toggler').on('click', function() {
		$('.wrapper').toggleClass('menu-show');
	})

	$('#history').on('click', function() {
		$('.wrapper').toggleClass('history-show');
	})

	$('.content__group').each(function() {
		$(this).on('focusin', function() {
			$(this).children('.content__textarea').addClass('cut');
			$(this).children('.content__textarea').addClass('before');
			$(this).children('.content__textarea').next().addClass('show');
		})

		$(this).on('focusout', function() {
			$(this).children('.content__textarea').removeClass('cut');
			
			$(this).children('.content__textarea').next().removeClass('show');

			if($(this).children('.content__textarea').children('textarea').val() == "") {
				$(this).children('.content__textarea').removeClass('before');
			}
			$(this).next().on('click', function() {
				$(this).children('.content__textarea').addClass('cut');
				$(this).children('.content__textarea').addClass('before');
				$(this).children('.content__textarea').next().addClass('show');
			})
		})

		if($(this).children('textarea').val() != "") {
			$(this).addClass('before');
		}
	})

	$('.content__nav button').each(function() {
		$(this).on('click', function() {
			$(this).parent().parent().parent().next().toggleClass('show');
		})
	})

	$(document).on('click', function(e) {
		let comment = $('.content__comment');
		let nav = $('.content__nav');
		
		if (!comment.is(e.target) 
			&& comment.has(e.target).length === 0
			&& !nav.is(e.target) 
			&& nav.has(e.target).length === 0
			) {
			$(comment).removeClass('show');
	}			
})

	$('.content__comment-form').each(function() {
		$(this).children('input').on('click', function() {
			$(this).parent().parent().removeClass('show');
		})
	})
})