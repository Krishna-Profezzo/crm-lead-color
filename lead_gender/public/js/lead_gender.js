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

// Form events for Lead doctype
frappe.ui.form.on('Lead', {
	refresh: function(frm) {
		// Update status color based on gender when form loads
		update_status_color(frm);
	},
	
	gender: function(frm) {
		// Update status color when gender changes
		update_status_color(frm);
	},
	
	status: function(frm) {
		// Update status color when status changes
		update_status_color(frm);
	}
});

function update_status_color(frm) {
	// Get the gender value
	var gender = frm.doc.gender;
	var status_field = frm.get_field('status');
	
	if (status_field && status_field.$wrapper) {
		// Remove any existing color classes
		status_field.$wrapper.find('.indicator-pill').removeClass('blue pink');
		
		// Add appropriate color class based on gender
		if (gender === 'Male') {
			status_field.$wrapper.find('.indicator-pill').addClass('blue');
		} else if (gender === 'Female') {
			status_field.$wrapper.find('.indicator-pill').addClass('pink');
		}
	}
}