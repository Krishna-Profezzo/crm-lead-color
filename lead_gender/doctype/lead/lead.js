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