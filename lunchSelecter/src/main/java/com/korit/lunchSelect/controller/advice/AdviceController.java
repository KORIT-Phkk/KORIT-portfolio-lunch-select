package com.korit.lunchSelect.controller.advice;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.korit.lunchSelect.dto.common.ErrorResponseDto;
import com.korit.lunchSelect.exception.CustomException;

@RestControllerAdvice
public class AdviceController {
	
	@ExceptionHandler(CustomException.class)
	public ResponseEntity<?> customException(CustomException e) {
		return ResponseEntity.badRequest().body(new ErrorResponseDto<>(e.getMessage(), e.getErrorMap()));
	}
	
	@ExceptionHandler(UsernameNotFoundException.class)
	public ResponseEntity<?> customException(UsernameNotFoundException e) {
		return ResponseEntity.badRequest().body(new ErrorResponseDto<>(e.getMessage(), null));
	}
}
