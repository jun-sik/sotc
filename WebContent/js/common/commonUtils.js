"use strict";
(function($) {
	$.extend(true, window, {
		"CommonUtils"	: CommonUtils
	});
	
	function CommonUtils() {
		function init() {
			
		};
		
		$.extend(this, {
				"init"		: init
		});
	};
	
	$.commonUtils = new CommonUtils();
	$.commonUtils.init();
}(jQuery));