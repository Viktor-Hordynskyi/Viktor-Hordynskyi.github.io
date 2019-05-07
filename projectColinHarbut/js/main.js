$(document).ready(function() {
	// init Masonry
	let $grid = $('.portfolio__gallery').masonry({
		itemSelector: '.portfolio__gallery-item',
		gutter: 20,
		percentPosition: true,
	});
	// layout Masonry after each image loads
	$grid.imagesLoaded().progress( function() {
		$grid.masonry();
	});

	// Bootstrap Lightbox
	$(window).on('resize load', function() {
		if (!window.matchMedia("(max-width: 767.98px)").matches) {
			$(document).on('click', '[data-toggle="lightbox"]', function(event) {
				event.preventDefault();
				$(this).ekkoLightbox({
					alwaysShowClose: true,
				});
			});
		}
	})

	// scrolling to anchor
	$('a[href^="#"]').on('click', function(e){
		e.preventDefault();
		let anchor = $(this);
		let speed = (($(anchor.attr('href')).offset().top) / 4);

		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top
		}, speed, 'linear');
	});
})