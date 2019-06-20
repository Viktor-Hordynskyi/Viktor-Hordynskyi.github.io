	$(document).ready(function () {
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


	window.sr = ScrollReveal();
	sr.reveal('.reveal', {
		duration: 2000
	});