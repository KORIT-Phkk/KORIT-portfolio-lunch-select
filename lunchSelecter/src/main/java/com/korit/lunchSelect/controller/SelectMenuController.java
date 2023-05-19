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

	@GetMapping("/lunchselect/roulette")
	public ResponseEntity<?> lunchSelect(LunchSelectReqDto lunchSelectReqDto) {
<<<<<<< HEAD
=======

		System.out.println("controller: " +lunchSelectReqDto);

//		System.out.println("controller: " + lunchSelectService.lunchSelect(lunchSelectReqDto));
>>>>>>> KimJaeYoung
		
		return ResponseEntity.ok(lunchSelectService.lunchSelect(lunchSelectReqDto));
	}
	
	public ResponseEntity<?> groupLunchSelect(){
		
		
		return ResponseEntity.ok(null);
	}
	

}
