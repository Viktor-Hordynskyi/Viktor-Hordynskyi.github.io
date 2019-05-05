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
})