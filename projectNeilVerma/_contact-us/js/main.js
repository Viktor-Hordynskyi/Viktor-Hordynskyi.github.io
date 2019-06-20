$(document).ready(function() {
	$("#toggler").on('click', function() {
		$('.navbar__hamburger-menu').toggleClass('show');
		$('.navbar__toggler').toggleClass('close');
	})

	$("#contact__form").submit(function(e) {
		e.preventDefault();
		let form_data = $(this).serialize();
		$.ajax({
			type: 'POST',
			url: '../php/handler.php',
			data: form_data,
			success: function(data) {
				$("#contact__form").trigger("reset");
			}
		});
	});
})

$(window).on('load scroll', function() {
	// show navbar when scroll page
	let w_scroll = $(window).scrollTop();
	let navbar = $('.navbar').height();

	if (0 < w_scroll) {
		$('.navbar').addClass('fixed');
		$('.wrapper').css('padding-top', navbar);
	} else {
		$('.navbar').removeClass('fixed');
		$('.wrapper').css('padding-top', '0px');
	}
})