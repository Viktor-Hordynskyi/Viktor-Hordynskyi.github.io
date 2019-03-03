$.fn.datepicker.dates['he'] = {
	days: [ "ראשון","שני","שלישי","רביעי","חמישי","שישי","שבת" ],
	daysShort: [ "א'","ב'","ג'","ד'","ה'","ו'","שבת" ],
	daysMin: [ "א'","ב'","ג'","ד'","ה'","ו'","שבת" ],
	months: [ "ינואר","פברואר","מרץ","אפריל","מאי","יוני",
	"יולי","אוגוסט","ספטמבר","אוקטובר","נובמבר","דצמבר" ],
	monthsShort: [ "ינו","פבר","מרץ","אפר","מאי","יוני",
	"יולי","אוג","ספט","אוק","נוב","דצמ" ],
	today: 'Today',
	clear: 'Clear',
	format: 'dd.mm.yyyy',
	titleFormat: "MM yyyy",
	weekStart: 0
}

$('.datepicker-here').datepicker({
	language: 'he',
	autoclose: true,
	rtl: true,
	orientation: 'left',
})