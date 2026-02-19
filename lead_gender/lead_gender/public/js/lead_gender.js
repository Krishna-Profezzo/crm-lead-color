// This file will be loaded as a client script
// Add custom CSS for status pill colors
frappe.ready(function() {
	// Add custom CSS styles
	var style = document.createElement('style');
	style.type = 'text/css';
	style.innerHTML = `
		.indicator-pill.blue {
			background-color: #007bff !important;
			color: white !important;
		}
		.indicator-pill.pink {
			background-color: #e83e8c !important;
			color: white !important;
		}
	`;
	document.head.appendChild(style);
});