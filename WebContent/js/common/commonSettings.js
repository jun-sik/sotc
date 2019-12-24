"use strict";
(function($) {
	$.extend(true, window, {
		"CommonSettings"	: CommonSettings
	});
	
	function CommonSettings() {
		function init() {
			
		};
		
		$.extend(this, {
				"init"	: init
		});
	};
	
	$.commonSettings = new CommonSettings();
	$.commonSettings.init();
}(jQuery));