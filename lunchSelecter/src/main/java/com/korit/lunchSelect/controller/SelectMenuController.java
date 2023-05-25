package com.korit.lunchSelect.controller;

import java.util.ArrayList;
import java.util.List;

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
//		System.out.println(lunchSelectReqDto);
		System.out.println(lunchSelectService.lunchSelect(lunchSelectReqDto));
		return ResponseEntity.ok(lunchSelectService.lunchSelect(lunchSelectReqDto));
	}
	
	@GetMapping("/lunchselect/result")
	public ResponseEntity<?> lunchResult(LunchSelectReqDto lunchSelectReqDto){
		List<String> list = new ArrayList<>();
		
		list.add(lunchSelectService.lunchResult(lunchSelectReqDto).getName());
		list.add(lunchSelectService.lunchResult(lunchSelectReqDto).getAddress());
		
		System.out.println(lunchSelectService.lunchResult(lunchSelectReqDto));
		
		return ResponseEntity.ok(lunchSelectService.lunchResult(lunchSelectReqDto));
	}
}

