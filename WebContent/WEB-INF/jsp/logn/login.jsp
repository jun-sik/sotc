<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<!DOCTYPE html>
<html>
	<head>
		<title>
			<tiles:getAsString name="title"/>
		</title>
		<tiles:insertAttribute name="commonMeta"/>
		<tiles:insertAttribute name="commonCss"/>
		<tiles:insertAttribute name="commonJs"/>
		<tiles:insertAttribute name="privateJs"/>
	</head>
	
	<body>
		<div class="limiter">
			<div class="container-login100">
				<div class="wrap-login100">
					<form class="login100-form validate-form">
						<span class="login100-form-title p-b-34">
						Account Login
						</span>
						
						<div class="wrap-input100 rs1-wrap-input100 validate-input m-b-20" data-validate="Type user name">
							<input id="userId" class="input100" type="text" name="userId" placeholder="ID">
							<span class="focus-input100"></span>
						</div>
						
						<div class="wrap-input100 rs2-wrap-input100 validate-input m-b-20" data-validate="Type password">
							<input class="input100" type="password" id="userPwd" name="userPwd" placeholder="Password">
							<span class="focus-input100"></span>
						</div>
						
						<div class="container-login100-form-btn">
							<button class="login100-form-btn" onClick="$.login.doLogin();">
								<span>Log in</span>
							</button>
						</div>
						
						<div class="w-full text-center p-t-27 p-b-239">
							<span class="txt1">Forgot</span>
						
							<a href="#" class="txt2">ID / Password?</a>
						</div>
						
						<div class="w-full text-center">
							<a class="txt3" onClick="$.login.doSignUp();">회원가입</a>
						</div>
					</form>
				
					<div class="login100-more" style="background-image: url('${GLOBAL_PATH}/public/images/bg_jejus.jpg');"></div>
				</div>
			</div>
		</div>
		
		<div id="dropDownSelect1"></div>
	</body>
</html>