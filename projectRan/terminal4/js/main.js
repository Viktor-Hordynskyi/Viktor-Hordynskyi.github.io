$(document).ready(function(){
	const footer = $('.footer').height();
	const header = $('.navbar').innerHeight();

	$('.gallery').css('min-height', `calc(100vh - 1rem - ${footer}px - ${header}px)`);

});

$(window).on('resize', function() {
	const footer = $('.footer').height();
	const header = $('.navbar').innerHeight();

	$('.gallery').css('min-height', `calc(100vh - 1rem - ${footer}px - ${header}px)`);
})