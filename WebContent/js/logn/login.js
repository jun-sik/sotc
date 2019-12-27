"use strict";
(function($) {
	$.extend(true, window, {
		"Login"	: Login
	});
	
	function Login() {
		function init() {
			
		};
		
		/**
		 * 로그인 버튼 클릭
		 */
		function doLogin() {
			if ( $.commonUtils.isEmpty($("#userId").val()) ) {
				alert("ID를 입력하세요.");
				$("#userId").focus();
				return;
			}
			
			if ( $.commonUtils.isEmpty($("#userPwd").val()) ) {
				alert("비밀번호를 입력하세요.");
				$("#userPwd").focus();
				return;
			}
			
			var url = $GLOBAL_PATH + "/logn/doLogin.ajax";
			var param = {
					userId	: $.trim($("#userId").val())
				,	userPwd	: $.trim($("#userPwd").val())
			};
			
			$.commonUtils.comAjax(ur, param, function(result) {
				debugger;
				console.log(result);
			});
		};
		
		function doSignUp() {
			alert("권성복이");
		};
		
		$.extend(this, {
				"init"		: init
			,	"doLogin"	: doLogin
			,	"doSignUp"	: doSignUp
		});
	};
	
	$.login = new Login();
	$(document).ready(function() {
		$.login.init();
	});
}(jQuery));