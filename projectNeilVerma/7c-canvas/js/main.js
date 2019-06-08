$(document).ready(function() {
	$('.menu-toggler').on('click', function() {
		$('.wrapper').toggleClass('menu-show');
	})

	$('.header__buttons button').each(function() {
		let name = $(this).data('target');

		$(this).on('click', function() {
			if($('#'+name).hasClass('show')) {
				$('#'+name).removeClass('show');
				$('.wrapper').removeClass('right-show right-notepad column');
			}	else {
				$('.right>div').removeClass('show');
				$('#'+name).addClass('show');

				if(name == 'notepad') {
					$('.wrapper').removeClass('right-show');
					$('.wrapper').addClass('right-notepad column');
				} else {
					$('.wrapper').removeClass('right-notepad column');
					$('.wrapper').addClass('right-show');
				}
			}		
		})
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

	$('.content__title-btn').each(function() {
		$(this).on('click', function() {
			$(this).toggleClass('off');

			let first = $(this).parent().nextAll('.content-first');
			let second = $(this).parent().nextAll('.content-second');

			if($(this).hasClass('off')) {
				$(first).removeClass('show');
				$(second).addClass('show');				
			} else {
				$(first).addClass('show');
				$(second).removeClass('show');
			}
		})
	})

	$('.right__close').each(function() {
		$(this).on('click', function() {
			$(this).parent().parent().removeClass('show');
			$('.wrapper').removeClass('right-show right-notepad column');
		})		
	})
})