package com.catholic.sotc.logn.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/logn/*")
public class LognController {
	private static final Logger logger = LoggerFactory.getLogger(LognController.class);
	
	@GetMapping("login.do")
	public ModelAndView login() {
		logger.info("로그인 화면 출력");
		return new ModelAndView("logn/login");
	}
}
