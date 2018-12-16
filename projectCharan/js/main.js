// add style for navbar
window.onscroll = header = function() {
	var nav = document.getElementById('navbar')
	if (window.pageYOffset>0) {
		nav.classList.add('fixed');
	} else {
		nav.classList.remove('fixed');
	}
}
document.addEventListener("DOMContentLoaded", header);

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