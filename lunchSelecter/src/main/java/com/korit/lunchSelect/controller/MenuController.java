package com.korit.lunchSelect.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.korit.lunchSelect.dto.LunchSelectReqDto;
import com.korit.lunchSelect.service.RoomService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class MenuController {

	private final RoomService lunchSelectService;

	@GetMapping("/lunchselect/roulette")
	public ResponseEntity<?> lunchSelect(LunchSelectReqDto lunchSelectReqDto) {
		System.out.println(lunchSelectService.lunchSelect(lunchSelectReqDto));
		return ResponseEntity.ok(lunchSelectService.lunchSelect(lunchSelectReqDto));
	}
	
//	@GetMapping("/lunchselect/result")
//	public ResponseEntity<?> lunchResult(LunchSelectReqDto lunchSelectReqDto){
//		List<String> list = new ArrayList<>();
//		
//		list.add(lunchSelectService.lunchResult(lunchSelectReqDto).getName());
//		list.add(lunchSelectService.lunchResult(lunchSelectReqDto).getAddress());
//		
//		System.out.println(lunchSelectService.lunchResult(lunchSelectReqDto));
		
//		return ResponseEntity.ok(lunchSelectService.lunchResult(lunchSelectReqDto));
//	}
}

