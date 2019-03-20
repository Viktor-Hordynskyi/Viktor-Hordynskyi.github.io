$(document).ready(function() {
	new WOW().init();
	
	$(document).ready(function(){
		$('.partners__slider-container').slick({
			slidesToShow: 7,
			slidesToScroll: 7,
			dots: true,
			prevArrow: '<div class="partners__slider-prev"><img src="img/prev.png" alt="prev"></div>',
			nextArrow: '<div class="partners__slider-next"><img src="img/next.png" alt="next"></div>',
			appendDots: '.partners__slider-dots',
			responsive: [
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
				}
			}]
		});
	});
});