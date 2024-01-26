// Copyright (c) 2023, Shubhamkar Nalkar and contributors
// For license information, please see license.txt

frappe.ui.form.on('Article', {
	refresh: function(frm) {
		frappe.msgprint(
			msg='This file does not exist',
			title='Error',
			raise_exception=FileNotFoundError
		)
	}
});
