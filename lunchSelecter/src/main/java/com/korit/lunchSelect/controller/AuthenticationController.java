package com.korit.lunchSelect.controller;

import javax.validation.Valid;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.korit.lunchSelect.aop.annotation.ValidAspect;
import com.korit.lunchSelect.dto.auth.LoginReqDto;
import com.korit.lunchSelect.dto.auth.SignupDto;
import com.korit.lunchSelect.service.AuthenticationService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthenticationController{
	private final AuthenticationService authenticationService;
	
	@ValidAspect
	@PostMapping("/signup")
	public ResponseEntity<?> signup(@Valid @RequestBody SignupDto signupDto, BindingResult bindingResult) {
		authenticationService.checkDuplicatedEmail(signupDto.getEmail());
		authenticationService.signup(signupDto);
		return ResponseEntity.ok().body(true);
	}
	
	@ValidAspect
	@PostMapping("/login")
	public ResponseEntity<?> login(@Valid @RequestBody LoginReqDto loginReqDto, BindingResult bindingResult) {
		return ResponseEntity.ok(authenticationService.signin(loginReqDto));
	}
	
	@GetMapping("/authenticate")
	public ResponseEntity<?> authenticate(String accessToken) {
		return ResponseEntity.ok().body(authenticationService.authenticate(accessToken));
	}
}
