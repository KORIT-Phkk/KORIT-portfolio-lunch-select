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
import org.springframework.web.bind.annotation.RestController;

import com.korit.lunchSelect.aop.annotation.ValidAspect;
import com.korit.lunchSelect.dto.account.FindEmailReqDto;
import com.korit.lunchSelect.dto.account.ResetPasswordReqDto;
import com.korit.lunchSelect.service.AccountService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AccountController {
	
	private final AccountService accountService;
	
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
	@PutMapping("/resetPassword")
	public ResponseEntity<?> resetPassword(@Valid @RequestBody ResetPasswordReqDto resetPasswordReqDto, BindingResult bindingResult) {
		return ResponseEntity.ok().body(accountService.resetPassword(resetPasswordReqDto));
	}
}
