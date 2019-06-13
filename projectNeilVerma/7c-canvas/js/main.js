$(document).ready(function() {
	$('.menu-toggler').on('click', function() {
		$('.wrapper').toggleClass('menu-show');
	})

	$('.header__buttons button').each(function() {
		let name = $(this).data('target');
		let plus = $('.menu__search-buttons button').data('target');

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

	$('.plus-btn').each(function() {
		let plus = $(this).data('target');

		$(this).on('click', function() {
			if($('#'+plus).hasClass('show')) {
				$('#'+plus).removeClass('show');
				$('.wrapper').removeClass('sidebar-show sidebar-notepad');
			}	else {
				$('.sidebar>div').removeClass('show');
				$('#'+plus).addClass('show');

				if(plus == 'notepad') {
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
			$(this).children('.content__calcs').addClass('cut');
			$(this).children('.content__logo-big').addClass('cut');
			$(this).children('.content__subgroup-wrapper').addClass('cut');
			$(this).children('.content__textarea').addClass('before');
			$(this).children('.content__textarea').next().addClass('show');
			$(this).children('.content__nav').addClass('show');
		})

		$(this).on('focusout', function() {
			$(this).children('.content__textarea').removeClass('cut');
			$(this).children('.content__calcs').removeClass('cut');
			$(this).children('.content__logo-big').removeClass('cut');
			$(this).children('.content__subgroup-wrapper').removeClass('cut');
			
			$(this).children('.content__textarea').next().removeClass('show');
			$(this).children('.content__nav').removeClass('show');

			if($(this).children('.content__textarea').children('textarea').val() == "") {
				$(this).children('.content__textarea').removeClass('before');
			}
			$(this).next().on('click', function() {
				$(this).children('.content__textarea').addClass('cut');
				$(this).children('.content__calcs').addClass('cut');
				$(this).children('.content__logo-big').addClass('cut');
				$(this).children('.content__subgroup-wrapper').addClass('cut');
				$(this).children('.content__textarea').addClass('before');
				$(this).children('.content__textarea').next().addClass('show');
			})
		})

		if($(this).children('.content__textarea').children('textarea').val() != "") {
			$(this).children('.content__textarea').addClass('before');
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
		let comment = $('.content__comment');

		if(window.matchMedia("(min-width: 768px)").matches) {
			setTimeout(function() {
				if(($('.wrapper').hasClass('menu-show') ||	$('.wrapper').hasClass('sidebar-notepad') || $('.wrapper').hasClass('sidebar-show')) && $('.container').width() <= 1000) {
					$('.wrapper').addClass('column');
					comment.addClass('position-mobile');
				} else {
					$('.wrapper').removeClass('column');
					comment.removeClass('position-mobile');
				}
			}, msduration)
		}
	})
})

$(window).on('resize load', function() {
	if(this.matchMedia("(max-width: 1024px)").matches) {
		$('.wrapper').removeClass('menu-show');
	}

	if(window.matchMedia("(max-width: 767px)").matches) {		
		$('.content__comment').addClass('position-mobile');
	}	else {
		$('.content__comment').removeClass('position-mobile');
	}	
})