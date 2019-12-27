package com.catholic.sotc.logn.controller;

import java.security.KeyFactory;
import java.security.KeyPair;
import java.security.KeyPairGenerator;
import java.security.PrivateKey;
import java.security.PublicKey;
import java.security.spec.RSAPublicKeySpec;

import javax.crypto.Cipher;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
@RequestMapping("/logn/*")
public class LognController {
	private static final Logger logger = LoggerFactory.getLogger(LognController.class);
	private static String RSA_WEB_KEY = "_RSA_WEB_Key_";
	private static String RSA_INSTANCE = "RSA";
	
	/**
	 * login 화면 출력
	 * @return
	 */
	@GetMapping("login.do")
	public ModelAndView login(HttpServletRequest req, HttpServletResponse res) throws Exception {
		logger.info("로그인 화면 출력");
		initRsa(req);
		return new ModelAndView("logn/login");
	}
	
	/**
	 * 
	 * @param req
	 * @param res
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("doLogin.ajax")
	public ModelAndView doLogin(HttpServletRequest req, HttpServletResponse res) throws Exception {
		String userId = (String)req.getParameter("userId");
		String userPwd = (String)req.getParameter("userPwd");
		HttpSession session = req.getSession();
		PrivateKey privateKey = (PrivateKey)session.getAttribute(RSA_WEB_KEY);
		userId = decryptRsa(privateKey, userId);
		userPwd = decryptRsa(privateKey, userPwd);
		session.removeAttribute(RSA_WEB_KEY);
		ModelAndView model = new ModelAndView();
		model.setViewName("");
		
		return model;
	}
	
	/**
	 * 
	 * @param privateKey
	 * @param secureValue
	 * @return
	 * @throws Exception
	 */
	private String decryptRsa(PrivateKey privateKey, String secureValue) throws Exception {
		Cipher cipher = Cipher.getInstance(RSA_INSTANCE);
		byte[] encryptedBytes = hexToByteArray(secureValue);
		cipher.init(Cipher.DECRYPT_MODE, privateKey);
		byte[] decryptedBytes = cipher.doFinal(encryptedBytes);
		String decryptedValue = new String(decryptedBytes, "utf-8");
		
		return decryptedValue;
	}
	
	/**
	 * 16진 문자열을 byte 배열로 변환한다.
	 * @param hex
	 * @return
	 */
	public static byte[] hexToByteArray(String hex) {
		if ( hex == null || hex.length() % 2 != 0 ) {
			return new byte[] {};
		}
		
		byte[] bytes = new byte[hex.length() / 2];
		
		for ( int i = 0; i < hex.length(); i += 2 ) {
			byte value = (byte)Integer.parseInt(hex.substring(i, i + 2), 16);
			bytes[(int)Math.floor(i / 2)] = value;
		}
		
		return bytes;
	}
	
	/**
	 * rsa 공개키, 개인키 생성
	 * @param req
	 */
	public void initRsa(HttpServletRequest req) {
		HttpSession session = req.getSession();
		KeyPairGenerator generator;
		
		try {
			generator = KeyPairGenerator.getInstance(RSA_INSTANCE);
			generator.initialize(1024);
			KeyPair keyPair = generator.genKeyPair();
			KeyFactory keyFactory = KeyFactory.getInstance(RSA_INSTANCE);
			PublicKey publicKey = keyPair.getPublic();
			PrivateKey privateKey = keyPair.getPrivate();
			session.setAttribute(RSA_WEB_KEY, privateKey);
			RSAPublicKeySpec publicSpec = (RSAPublicKeySpec)keyFactory.getKeySpec(publicKey, RSAPublicKeySpec.class);
			String publicKeyModule = publicSpec.getModulus().toString(16);
			String publicKeyExponent = publicSpec.getPublicExponent().toString(16);
			req.setAttribute("RSAModules", publicKeyModule);
			req.setAttribute("RSAExponent", publicKeyExponent);
		}
		catch ( Exception e ) {
			e.printStackTrace();
		}
	}
}
