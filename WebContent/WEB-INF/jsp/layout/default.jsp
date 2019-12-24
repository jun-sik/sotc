<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html class="">
	<head>
		<title>
			<tiles:getAsString name="title"/>
		</title>
		<tiles:insertAttribute name="commonMeta"/>
		<tiles:insertAttribute name="commonCss"/>
		<tiles:insertAttribute name="commonJs"/>
		<tiles:insertAttribute name="commonLang"/>
		<tiles:insertAttribute name="privateJs"/>
	</head>
	
	<body oncontextmenu="return false;">
		<div class="">
<%-- 			<tiles:insertAttribute name="header"/> --%>
			
			<div class="">
				<main class="">
					<tiles:insertAttribute name="privateJsp"/>
				</main>
			</div>
			
<%-- 			<tiles:insertAttribute name="footer"/> --%>
		</div>
	</body>
</html>