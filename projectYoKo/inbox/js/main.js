$(document).ready(function() {
	$('.chat__message').on('click', function() {
		if(!$(this).hasClass('opacity')) {
			$('.chat__message').removeClass('opacity')
			$(this).addClass('opacity');
		}	else {
			$(this).removeClass('opacity');
		}
	})

	function check() {
		// if($('.navbar__edit .fas').hasClass('fa-times')) {
		// 	$('.navbar__edit .fas').removeClass('fa-times').addClass('fa-bars')
		// } else {
		// 	$('.navbar__edit .fas').removeClass('fa-bars').addClass('fa-times')
		// }
		$('.navbar__edit .fas.fa-chevron-circle-right').toggleClass('rotate')
	}

	function rotateHide() {
		$('.navbar__edit .fas.fa-chevron-circle-right').removeClass('rotate')
	}

	function rotateShow() {
		$('.navbar__edit .fas.fa-chevron-circle-right').addClass('rotate')
	}

	function hide() {
		$('.navbar').removeClass('show');
	}

	function show() {
		$('.navbar').addClass('show');
	}

	$('#toggle').on('click', function() {
		// $('.navbar').toggleClass('show')
		if($('.navbar').hasClass('show')) {
			$('.navbar').removeClass('show').addClass('hide')
		} else {
			$('.navbar').removeClass('hide').addClass('show')
		}

		check();
	})

	if (window.matchMedia("(max-width: 991.98px)").matches) {
		hide();
		rotateHide()
	} else {
		show();
		rotateShow()
	}

	$(window).on('resize', function() {
		if (window.matchMedia("(max-width: 991.98px)").matches) {
			hide();
			rotateHide()			
		} else {
			show();
			rotateShow()
		}
	})
})