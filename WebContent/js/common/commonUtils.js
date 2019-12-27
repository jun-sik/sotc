"use strict";
(function($) {
	$.extend(true, window, {
		"CommonUtils"	: CommonUtils
	});
	
	function CommonUtils() {
		var $ajaxObj = 0;
		
		function init() {
			
		};
		
		/**
         * 
         */
        function isEmpty(str) {
        	if ( typeof(str) == undefined || str == null || str == "" ) {
        		return true;
        	}
        	else {
        		return false;
        	}
        }
        
        /**
         * 
         */
        function strNvl(str, val) {
        	if ( typeof(str) == undefined || str == null || str == "" ) {
        		str = val;
        	}
        	
        	return str;
        }
        
        /**
		 * 좌측문자열채우기
		 * @params
		 *  - str : 원 문자열
		 *  - padLen : 최대 채우고자 하는 길이
		 *  - padStr : 채우고자하는 문자(char)
		 */
		function getLpad(str, padLen, padStr) {
		    if ( padStr.length > padLen ) {
		        return str;
		    }
		    
		    str += ""; // 문자로
		    padStr += ""; // 문자로
		    
		    while (str.length < padLen)
		        str = padStr + str;
		    str = str.length >= padLen ? str.substring(0, padLen) : str;
		    
		    return str;
		};
		
		/**
		 * 숫자 3자리 단위마다 콤마 포맷으로 변경
		 *
		 * @param number (숫자만 있는)문자열
		 */
		function getNoType(number) {
			var no = "";
			
			if ( !isEmpty(number) ) {
				no = (number + "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
			}
			
			return no;
		};
		
		/**
		 * 
		 */
		function comAjax(url, param, doFunc) {
			var data = $.commonUtils.isEmpty(param) ? {} : param;
			var def = $.commonUtils.isEmpty(data.defYn) ? $.Deferred() : null;
			
			if ( $ajaxObj != 0 ) {
				$ajaxObj.abort();
				$ajaxObj = 0;
			}
			
			$ajaxObj = $.ajax({
					url			: url
				,	type		: "POST"
				,	data		: data
				,	dataType	: "json"
				,	success		: function(result) {
					$ajaxObj = 0;
					
					if ( !$.commonUtils.isEmpty(doFunc) ) {
						doFunc(result);
					}
					
					if ( !$.commonUtils.isEmpty(def) ) {
						def.resolve(result);
					}
				}
				,	error		: function(result) {
					$ajaxObj = 0;
					
					if ( !$.commonUtils.isEmpty(doFunc) ) {
						doFunc(result);
					}
				}
			});
			
			if ( !$.commonUtils.isEmpty(def) ) {
				return def.promise();
			}
		};
		
		$.extend(this, {
				"init"				: init
			,	"isEmpty"			: isEmpty
			,	"strNvl"			: strNvl
			,	"getLpad"			: getLpad
			,	"getNoType"			: getNoType
			,	"comAjax"			: comAjax
		});
	};
	
	$.commonUtils = new CommonUtils();
	$.commonUtils.init();
}(jQuery));