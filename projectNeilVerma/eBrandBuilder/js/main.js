$(document).ready(function() {
	// scrolling to anchor
	$('a[href^="#"]').on('click', function(e){
		e.preventDefault();
		let anchor = $(this);
		let speed = (($(anchor.attr('href')).offset().top) / 8);

		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top
		}, speed, 'linear');
	});
})

// JS for home page
$('#home-page .parallax').on('load scroll', function() {
	// show navbar when scroll page
	let w_scroll = $(window).scrollTop();
	let navbar = $('#home-page .navbar').height();
	let t_top = $('#home-page .content').offset().top;	

	if ((t_top-navbar) <= w_scroll) {
		$('#home-page .parallax').css({'perspective' : 'none'})
		$('#home-page .navbar').addClass('fixed');
	} else {
		$('#home-page .parallax').css({'perspective' : '2px'})
		$('#home-page .navbar').removeClass('fixed');
	}
})

$(document).ready(function() {
	$("#home-page #toggler").on('click', function() {
		$('.navbar__hamburger-menu').toggleClass('show');
		$('.navbar__toggler').toggleClass('close');

		let w_scroll = $(window).scrollTop();
		let navbar = $('.navbar').height();
		let t_top = $('.content').offset().top;	

		if($('.navbar__hamburger-menu').hasClass('show')) {
			$('.parallax').css({'perspective' : 'none'})
		} else {
			if ((t_top-navbar) <= w_scroll) {
				$('.parallax').css({'perspective' : 'none'})
			} else {
				$('.parallax').css({'perspective' : '2px'})
			}
		}		
	})

	$('#home-page .build__item-active').on('click', function() {
		let item = $(this).data('target');

		$('#'+item).addClass('show');
		$('.build__items').addClass('show');
	})
})

// JS for book-landing-page
$(document).ready(function() {
	$('.intro-forms__switch').on('click', function() {
		let ctgr = $(this).data('target');

		if(!$('#'+ctgr).hasClass('show')) {
			$('.intro-forms__form').removeClass('show');
			$('#'+ctgr).addClass('show');

			$('.intro-forms__switch').removeClass('active');
			$(this).addClass('active');
		}
	})

	$('#upgrade').on('click', function() {
		let value = $('#upgrade').prop('value');
		let total = $('#total-price').data('value');
		let sum = parseFloat(value) + parseFloat(total);

		if($('#upgrade').prop('checked')) {			
			$('#upgrade-price').text('$' + value);
			
			$('#total-price').text('$' + sum);
		} else {
			$('#upgrade-price').text('$0.00');

			$('#total-price').text('$' + total);
		}
		
	})
})

// JS for contact-us
$(document).ready(function() {
	$("#contact-us #toggler").on('click', function() {
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
		$('#contact-us .navbar').addClass('fixed');
		$('#thank-you-ebc .navbar').addClass('fixed');
		$('#review .navbar').addClass('fixed');
		$('#contact-us .wrapper').css('padding-top', navbar);
		$('#thank-you-ebc .wrapper').css('padding-top', navbar);
		$('#review .wrapper').css('padding-top', navbar);
	} else {
		$('#contact-us .navbar').removeClass('fixed');
		$('#thank-you-ebc .navbar').removeClass('fixed');
		$('#review .navbar').removeClass('fixed');
		$('#contact-us .wrapper').css('padding-top', '0px');
		$('#thank-you-ebc .wrapper').css('padding-top', '0px');
		$('#review .wrapper').css('padding-top', '0px');
	}
})

// JS for review page
var x, i, j, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
	selElmnt = x[i].getElementsByTagName("select")[0];
	/*for each element, create a new DIV that will act as the selected item:*/
	a = document.createElement("DIV");
	a.setAttribute("class", "select-selected");
	a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
	x[i].appendChild(a);
	/*for each element, create a new DIV that will contain the option list:*/
	b = document.createElement("DIV");
	b.setAttribute("class", "select-items select-hide");
	for (j = 1; j < selElmnt.length; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        h = this.parentNode.previousSibling;
        for (i = 0; i < s.length; i++) {
        	if (s.options[i].innerHTML == this.innerHTML) {
        		s.selectedIndex = i;
        		h.innerHTML = this.innerHTML;
        		y = this.parentNode.getElementsByClassName("same-as-selected");
        		for (k = 0; k < y.length; k++) {
        			y[k].removeAttribute("class");
        		}
        		this.setAttribute("class", "same-as-selected");
        		break;
        	}
        }
        h.click();
      });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  for (i = 0; i < y.length; i++) {
  	if (elmnt == y[i]) {
  		arrNo.push(i)
  	} else {
  		y[i].classList.remove("select-arrow-active");
  	}
  }
  for (i = 0; i < x.length; i++) {
  	if (arrNo.indexOf(i)) {
  		x[i].classList.add("select-hide");
  	}
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);

$(document).ready(function() {
	$("#review #toggler").on('click', function() {
		$('.navbar__hamburger-menu').toggleClass('show');
		$('.navbar__toggler').toggleClass('close');
	})	
})

// ScrollReval JS initialization
window.sr = ScrollReveal();
sr.reveal('.reveal', {
	duration: 2000
});

$(document).ready(function () {
	// JS for eBrandConsult
	$('.reservebox li').click(function () {
		$(this).addClass('highlight').siblings().removeClass('highlight');
	}); 
	$('.link-1').click(function () {
		$('.link-1').addClass('selected').siblings().removeClass('selected');
		$('.displayb').removeClass('displayb');
		$('.checks-1').addClass('displayb');
	}); 
	$('.link-2').click(function () {
		$('.link-2').addClass('selected').siblings().removeClass('selected');
		$('.displayb').removeClass('displayb');
		$('.checks-2').addClass('displayb');
	}); 
	$('.link-3').click(function () {
		$('.link-3').addClass('selected').siblings().removeClass('selected');
		$('.displayb').removeClass('displayb');
		$('.checks-3').addClass('displayb');
	});

	// JS for eBrandServices
	$('#cbox-1, #sum').html($('.value-1').val());

	$('.col2 .colCont').click(function () {
		if ($('.col2 .colCont').hasClass('active-price')) {
			$('#cbox-2').html('0');
		} else {
			$('#cbox-2').html($('.value-2').val());
		}
	});

	$('.col2 .colCont, .col3box').click(function () {
		$(this).toggleClass('active-price');
	});

	$('.col3box').click(function () {
		var totalPoints = 0;
		$('.col3box.active-price').find('input').each(function () {
			totalPoints += parseInt($(this).val());
		});
		$('#cbox-3').html(totalPoints);
	});

	$('.col2 .colCont, .col3box').click(function () {
		var totalsum = 0;
		$('.cbox').find('#cbox-1, #cbox-2, #cbox-3').each(function () {
			totalsum += parseInt($(this).html());
		});
		$('#sum').html(totalsum);
	});

	$('.col3box').click(function () {
		if ($('.col3box').hasClass('active-price')) {
			$('.colTitle').addClass('active-price');
		} else {
			$('.colTitle').removeClass('active-price');
		}
	});
});