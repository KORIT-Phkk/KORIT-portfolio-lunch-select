package com.korit.lunchSelect.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.korit.lunchSelect.dto.LunchSelectReqDto;
import com.korit.lunchSelect.service.LunchSelectService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class SelectMenuController {

	private final LunchSelectService lunchSelectService;
	
	@GetMapping("/lunch/select")
	public ResponseEntity<?> lunchSelect(LunchSelectReqDto lunchSelectReqDto) {
		
//		System.out.println(lunchSelectReqDto);
		System.out.println("controller: " + lunchSelectService.lunchSelect(lunchSelectReqDto));
		
		return ResponseEntity.ok(lunchSelectService.lunchSelect(lunchSelectReqDto));
	}
}
