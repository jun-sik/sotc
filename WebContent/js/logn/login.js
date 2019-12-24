"use strict";
(function($) {
	$.extend(true, window, {
		"Login"	: Login
	});
	
	function Login() {
		function init() {
			
		};
		
		$.extend(this, {
				"init"	: init
		});
	};
	
	$.login = new Login();
	$(document).ready(function() {
		$.login.init();
	});
}(jQuery));