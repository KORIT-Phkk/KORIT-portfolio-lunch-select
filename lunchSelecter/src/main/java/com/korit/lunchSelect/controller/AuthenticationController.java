package com.korit.lunchSelect.controller;

import javax.validation.Valid;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.korit.lunchSelect.aop.annotation.ValidAspect;
import com.korit.lunchSelect.dto.auth.LoginReqDto;
import com.korit.lunchSelect.dto.auth.OAuth2ProviderMergeReqDto;
import com.korit.lunchSelect.dto.auth.OAuth2RegisterReqDto;
import com.korit.lunchSelect.dto.auth.SignupDto;
import com.korit.lunchSelect.security.jwt.JwtTokenProvider;
import com.korit.lunchSelect.service.AuthenticationService;
import com.korit.lunchSelect.service.OAuthService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthenticationController{
	private final AuthenticationService authenticationService;
	private final OAuthService oAuthService;
	private final JwtTokenProvider jwtTokenProvider;
	
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
	public ResponseEntity<?> authenticate(@RequestHeader(value="Authorization") String accessToken) {
		return ResponseEntity.ok().body(authenticationService.authenticate(accessToken));
	}
	
	@GetMapping("/userInfo")
	public ResponseEntity<?> getUserInfo(@RequestHeader(value="Authorization") String accessToken) {
		return ResponseEntity.ok().body(authenticationService.getUserInfo(accessToken));
	}
	
	@PostMapping("/oauth2/register")
	public ResponseEntity<?> oauth2Register(@RequestHeader(value="registerToken") String registerToken, @RequestBody OAuth2RegisterReqDto oAuth2RegisterReqDto){
		
		boolean validated = jwtTokenProvider.validateToken(jwtTokenProvider.getToken(registerToken));
		
		if(!validated) {
			return ResponseEntity.badRequest().body("회원가입 요청 시간이 초과하였습니다.");
		}
		
		return ResponseEntity.ok().body(oAuthService.oauth2Register(oAuth2RegisterReqDto));	
	}
	
	@PutMapping("/oauth2/merge")
	public ResponseEntity<?> providerMerge(@RequestBody OAuth2ProviderMergeReqDto oAuth2ProviderMergeReqDto) {
		
		if(!oAuthService.checkPassword(oAuth2ProviderMergeReqDto.getEmail(), oAuth2ProviderMergeReqDto.getPassword())) {
			return ResponseEntity.badRequest().body("비밀번호가 일치하지 않습니다");
		}
			
		return ResponseEntity.ok().body(oAuthService.oAuth2ProviderMerge(oAuth2ProviderMergeReqDto));
	}
}
