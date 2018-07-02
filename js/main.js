// Star sky with help canvas draw 
function drawing() {
	var c = document.getElementById('star-sky');
	var ctx = c.getContext('2d');
	var xMax = c.width = window.screen.availWidth;
	var yMax = c.height = window.screen.availHeight;

	var hmTimes = Math.round(xMax + yMax);
	for(var i=0; i<=hmTimes; i++) {
		var randomX = Math.floor((Math.random()*xMax)+1);
		var randomY = Math.floor((Math.random()*yMax)+1);
		var randomSize = Math.floor((Math.random()*2)+1);
		var randomOpacityOne = Math.floor((Math.random()*9)+1);
		var randomOpacityTwo = Math.floor((Math.random()*9)+1);
		var randomHue = Math.floor((Math.random()*360)+1);
		if(randomSize>1) {
			ctx.shadowBlur = Math.floor((Math.random()*15)+5);
			ctx.shadowColor = "white";
		}
		ctx.fillStyle = "hsla("+randomHue+", 30%, 80%, ."+randomOpacityOne+randomOpacityTwo+")";
		ctx.fillRect(randomX, randomY, randomSize, randomSize);
	}
}
drawing();
// var c = document.getElementById('star-sky');
// var ctx = c.getContext('2d');
// var x = c.width = window.innerWidth;
// var y = c.height = window.innerHeight;
// var nStar = Math.round((x + y)/10);
// var randomSize = Math.floor((Math.random()*2)+1);

// var stars = [];

// var fps = 0;
// setInterval(function() {
//   console.log(fps);
//   fps = 0;
// }, 1000);
// function createStars() {
// 	'use strict';
// 	stars = [];
// 	for(var i=0; i<=nStar; i++) {
// 		stars.push({
// 			x: Math.random() * x,
// 			y: Math.random() * y,
// 			o: Math.random(),
// 			r: Math.random(),
// 			s: 0.02,
// 		})
// 		if(randomSize>.1) {
// 			ctx.shadowBlur = Math.floor((Math.random()*15));
// 			ctx.shadowColor = "white";
// 		}
// 	}
// }

// function drawing() {
// 	fps++;
// 	'use strict';
// 	requestAnimationFrame(drawing);
// 	ctx.clearRect(0, 0, innerWidth, innerHeight);
// 	for(var i=0; i<=nStar; i++) {
// 		var e = stars[i];
// 		if (e.o > 1 || e.o < 0) {
// 			e.s = -e.s;
// 		} 
// 		e.o += e.s;
// 		ctx.beginPath();
// 		ctx.arc(e.x, e.y, e.r, 0, Math.PI*2, false);
// 		ctx.strokeStyle = 'rgba(255, 255, 255, '+e.o+')';
// 		ctx.stroke();
// 	}
// }
// window.onload = function () {
// 	createStars();
// 	drawing();
// };
// window.onresize = function () {
// 	var x = c.width = window.innerWidth;
// 	var y = c.height = window.innerHeight;
// 	createStars();
// 	drawing();
// };



$(window).on('load scroll', function() {
	// show navbar when scroll page
	var w_scroll = $(window).scrollTop(),
	navbar = $('.navbar').height(),
	t_top = $('#navbar').offset().top;
	if ((t_top-navbar) <= w_scroll) {
		$('.navbar').addClass('fixed');
	} else {
		$('.navbar').removeClass('fixed');
	}

	// add .active to navbar link
	$('.navbar a').each(function() {
		var id = $(this).attr('href'),
		w_scroll = $(window).scrollTop(),
		navbar = $('.navbar').height(),
		t_top = $(id).offset().top;
		if ((t_top-navbar) <= w_scroll) {
			$('.navbar a').removeClass('active');
			$(this).addClass('active');
		}
	});
});

$(document).ready(function() {
	// add to home button hover effect
	$('.home_button').hover(function() {
		$('.home_button i, .home_button').addClass('hover');
	}, function() {
		$('.home_button i, .home_button').removeClass('hover');
	});

	// Scroll to top
  // animate link back to top
  $('#back-to-top').on('click', function(){
  	$('html, body').stop().animate({scrollTop:0}, 500, "linear");
  });

  // start WOW.js
  wow = new WOW( {
  	boxClass:     'wow',
  	animateClass: 'animated',
  	offset:       0,
  	mobile:       false,
  	live:         true
  });
  wow.init();

	// animate links - anchor(#)
	$('a').on('click', function(){
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top
		}, 500, 'linear');
		// event.preventDefault();
	});

	// Ajax request for feedback form
	$('#feedback-form').submit(function(e) {
		$.ajax({
			type: "POST",
			url: "feedback.php",
			data: $(this).serialize()
		}).done(function() {
			$("#feedback-form").trigger("reset");
		});
		return false;
	});

})
