document.addEventListener("DOMContentLoaded", function() {
	var calendarEl = document.getElementById("calendar");
	var calendar = new FullCalendar.Calendar(calendarEl, {
		initialView: "dayGridMonth",
	});
	calendar.render();
	calendar.addEvent({
		title: 'Dr. Halpert (Launch)',
		start: '2026-08-02', // Use YYYY-MM-DD or ISO string
		end: '2026-08-02', // Optional end date
		allDay: true // Optional boolean
	});
	calendar.addEvent({
		title: 'City Pharma (Audit)',
		start: '2026-08-02', // Use YYYY-MM-DD or ISO string
		end: '2026-08-02', // Optional end date
		allDay: true // Optional boolean
	});
	calendar.addEvent({
		title: 'Dr. Smith (Table)',
		start: '2026-08-03', // Use YYYY-MM-DD or ISO string
		end: '2026-08-03	', // Optional end date
		allDay: true // Optional boolean
	});
	calendar.addEvent({
		title: 'Dr. Kumar (Clinical)',
		start: '2026-08-04', // Use YYYY-MM-DD or ISO string
		end: '2026-08-04', // Optional end date
		allDay: true // Optional boolean
	});
});