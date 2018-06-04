$(document).ready(function(){

	// Start jquery spincrement
	var show = true;
	var countbox = ".skills";
	$(window).on("scroll load resize", function () {
		if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
		var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
		var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
		var w_height = $(window).height(); // Высота окна браузера
		var d_height = $(document).height(); // Высота всего документа
		var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
		if (w_top >= e_top - 100 || w_height + w_top == d_height || e_height + e_top < w_height) {
			// Делает прокрутку (анимацию) цифр от 0 до указаной позиции
			$('.animate_numbers').spincrement({
				from: 0,
				duration: 2000,
			})
			show = false;
		}
	});

	// start WOW.js
	new WOW().init();

})