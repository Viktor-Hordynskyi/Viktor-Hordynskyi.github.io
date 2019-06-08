$(document).ready(function() {
	$('.menu-toggler').on('click', function() {
		$('.wrapper').toggleClass('menu-show');
	})

	$('.header__buttons button').each(function() {
		let name = $(this).data('target');

		$(this).on('click', function() {
			if($('#'+name).hasClass('show')) {
				$('#'+name).removeClass('show');
				$('.wrapper').removeClass('sidebar-show sidebar-notepad');
			}	else {
				$('.sidebar>div').removeClass('show');
				$('#'+name).addClass('show');

				if(name == 'notepad') {
					$('.wrapper').removeClass('sidebar-show');
					$('.wrapper').addClass('sidebar-notepad');
				} else {
					$('.wrapper').removeClass('sidebar-notepad');
					$('.wrapper').addClass('sidebar-show');
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
			)
		{
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

	$('.sidebar__close').each(function() {
		$(this).on('click', function() {
			$(this).parent().parent().removeClass('show');
			$('.wrapper').removeClass('sidebar-show sidebar-notepad column');
		})		
	})

	$('.video-open').on('click', function() {
		$('.video-popup').addClass('show');
	})
	$('.video-close').on('click', function() {
		$('.video-popup').removeClass('show');
	})

	$('.wrapper').on('click', function() {
		let sduration = $('.wrapper').css('transition-duration');
		let msduration = Number.parseFloat(sduration) * 1000;

		if(window.matchMedia("(min-width: 768px)").matches) {
			setTimeout(function() {
				if(($('.wrapper').hasClass('menu-show') ||	$('.wrapper').hasClass('sidebar-notepad') || $('.wrapper').hasClass('sidebar-show')) && $('.container').width() <= 1000) {
					$('.wrapper').addClass('column');
				} else {
					$('.wrapper').removeClass('column');
				}
			}, msduration)
		}
	})

	$('.content__input-small').each(function() {
		$(this).on('focusin', function() {
			$(this).addClass('hide');
		})

		$(this).on('focusout', function() {
			$(this).removeClass('hide');
			
			if($(this).children('input').val() != "") {
				$(this).addClass('hide');
			}
		})

		if($(this).children('input').val() != "") {
			$(this).addClass('hide');
		}
	})
})