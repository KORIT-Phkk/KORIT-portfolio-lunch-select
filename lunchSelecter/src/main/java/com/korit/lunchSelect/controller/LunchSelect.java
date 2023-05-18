package com.korit.lunchSelect.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.korit.lunchSelect.entity.Room;
import com.korit.lunchSelect.service.LunchSelectService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/lunchselect")
@RequiredArgsConstructor
public class LunchSelect {
	
	private final LunchSelectService lunchSelectService;
	
	@PostMapping("/room")
	public ResponseEntity<?> createLunchSelectRoom(){
		return ResponseEntity.ok().body(lunchSelectService.createLunchSelectRoom());
	}
	
	
	
}
