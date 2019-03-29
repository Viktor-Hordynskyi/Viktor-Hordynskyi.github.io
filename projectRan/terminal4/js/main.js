$(document).ready(function(){
	const footer = $('.footer').height();
	const header = $('.navbar').innerHeight();	

	$('.gallery').css('min-height', `calc(100vh - 1rem - ${footer}px - ${header}px)`);

	$('#back-to-top').on('click', function(){
		$('html, body').stop().animate({scrollTop:0}, 500, "linear");
	})
});

$(window).on('resize', function() {
	const footer = $('.footer').height();
	const header = $('.navbar').innerHeight();

	$('.gallery').css('min-height', `calc(100vh - 1rem - ${footer}px - ${header}px)`);
})

