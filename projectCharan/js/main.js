// add style for navbar
// $(window).on('load scroll', function() {
// 	if ($(document).scrollTop()>0) {
// 		$('.navbar').addClass('fixed')
// 	} else {
// 		$('.navbar').removeClass('fixed')
// 	}
// })



$(document).ready(function() {
	// animate links - anchor(#)
	$('a').on('click', function(){
		var anchor = $(this);
		var navbar = $('.navbar').height();
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top - navbar
		}, 500, 'linear');
		event.preventDefault();
	});

	// choice menu
	$('.nav__link').each(function() {
		$(this).on('click', function() {
			$('.nav__link').removeClass('active')
			$(this).addClass('active')

			if($('.nav__link.food').hasClass('active')) {
				$('.menu__description').removeClass('show')
				$('.menu__description').removeClass('hide')
				$('#food').addClass('show')
				$('#chefs').addClass('hide')
				$('#veggie').addClass('hide')
				$('#dessert').addClass('hide')
			} 
			if($('.nav__link.chefs').hasClass('active')) {
				$('.menu__description').removeClass('show')
				$('.menu__description').removeClass('hide')
				$('#food').addClass('hide')
				$('#chefs').addClass('show')
				$('#veggie').addClass('hide')
				$('#dessert').addClass('hide')
			}
			if($('.nav__link.veggie').hasClass('active')) {
				$('.menu__description').removeClass('show')
				$('.menu__description').removeClass('hide')
				$('#food').addClass('hide')
				$('#chefs').addClass('hide')
				$('#veggie').addClass('show')
				$('#dessert').addClass('hide')
			}
			if($('.nav__link.dessert').hasClass('active')) {
				$('.menu__description').removeClass('show')
				$('.menu__description').removeClass('hide')
				$('#food').addClass('hide')
				$('#chefs').addClass('hide')
				$('#veggie').addClass('hide')
				$('#dessert').addClass('show')
			}
		})
	})

	var swiper = new Swiper('.swiper-container', {
		autoHeight: true,
		pagination: {
			el: '.swiper-pagination',
		},
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
	});
})