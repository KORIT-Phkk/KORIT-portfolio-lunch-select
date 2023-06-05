package com.korit.lunchSelect.controller;

import java.util.Map;

import javax.validation.Valid;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.korit.lunchSelect.aop.annotation.ValidAspect;
import com.korit.lunchSelect.dto.account.FindEmailReqDto;
import com.korit.lunchSelect.dto.account.PasswordChangeDto;
import com.korit.lunchSelect.dto.account.ResetPasswordReqDto;
import com.korit.lunchSelect.service.AccountService;
import com.korit.lunchSelect.util.cache.CacheTokenProvider;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AccountController {
	
	private final AccountService accountService;
	private final CacheTokenProvider cacheTokenProvider;
	
	@GetMapping("/findemail")
	public ResponseEntity<?> findEmail(FindEmailReqDto findEmailReqDto) {
		return ResponseEntity.ok().body(accountService.findEmail(findEmailReqDto));
	}
	
	@PostMapping("/findpassword")
	public ResponseEntity<?> findPassword(@RequestBody Map<String, String> requestMap) {
		accountService.sendUpdatePasswordEmail(requestMap.get("email"));
		return ResponseEntity.ok(true);
	}
	
	@ValidAspect
	@PutMapping("/resetpassword")
	public ResponseEntity<?> resetPassword(@Valid @RequestBody ResetPasswordReqDto resetPasswordReqDto, BindingResult bindingResult) {
		return ResponseEntity.ok().body(accountService.resetPassword(resetPasswordReqDto));
	}
	
	@GetMapping("/resetpassword/validatetoken")
	public ResponseEntity<?> validatetoken(@RequestParam String token) {
		cacheTokenProvider.validateToken(cacheTokenProvider.getTokenMap("passwordResetToken", token));
		return ResponseEntity.ok(true);
	}
	
	@ValidAspect
	@PutMapping("/updatepassword")
	public ResponseEntity<?> passwordChange(@Valid @RequestBody PasswordChangeDto passwordChangeDto, BindingResult bindingResult){
		accountService.updatePassword(passwordChangeDto);
		
		return ResponseEntity.ok().body(null);
	}
	
	@PostMapping("/profile/img")
	public ResponseEntity<?> updateProfile(@RequestPart MultipartFile profileImgFile) {
		return ResponseEntity.ok(accountService.updateProfileImg(profileImgFile));
	}
}
