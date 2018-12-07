$.fn.datepicker.language['he'] = {
	days: [ "ראשון","שני","שלישי","רביעי","חמישי","שישי","שבת" ],
	daysShort: [ "א'","ב'","ג'","ד'","ה'","ו'","שבת" ],
	daysMin: [ "א'","ב'","ג'","ד'","ה'","ו'","שבת" ],
	months: [ "ינואר","פברואר","מרץ","אפריל","מאי","יוני",
	"יולי","אוגוסט","ספטמבר","אוקטובר","נובמבר","דצמבר" ],
	monthsShort: [ "ינו","פבר","מרץ","אפר","מאי","יוני",
	"יולי","אוג","ספט","אוק","נוב","דצמ" ],
	today: 'Today',
	clear: 'Clear',
	dateFormat: 'dd.mm.yyyy',
	timeFormat: 'hh:ii',
	firstDay: 0
}

$('.datepicker-here').datepicker({
	language: 'he',
	autoClose: true
})

$(document).ready(function() {
	$('#adminButton').on('click', function() {
		if(!$('#collapseAdmin').hasClass('cpanel__description collapse show')) {
			$('.cpanel__personnel-hr').removeClass('show')
			$('.cpanel__personnel-hr').addClass('hide')
		} else {
			$('.cpanel__personnel-hr').removeClass('hide')
			$('.cpanel__personnel-hr').addClass('show')
		}
	})

	$('.cpanel__personnel-title').each(function() {
		$(this).on('click', function() {
			$($(this).find('img')).hasClass('rotate')
			? $($(this).find('img')).removeClass('rotate')
			: $($(this).find('img')).addClass('rotate')
		})
	})
})
