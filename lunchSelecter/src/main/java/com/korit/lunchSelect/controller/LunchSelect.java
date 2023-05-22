package com.korit.lunchSelect.controller;

import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.korit.lunchSelect.entity.RoomJoin;
import com.korit.lunchSelect.service.AuthenticationService;
import com.korit.lunchSelect.service.LunchSelectService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/lunchselect")
@RequiredArgsConstructor
public class LunchSelect {
	
	private final LunchSelectService lunchSelectService;
	private final AuthenticationService authenticationService;
	
	@PostMapping("/room")
	public ResponseEntity<?> createLunchSelectRoom(){
		
		return ResponseEntity.ok().body(lunchSelectService.createLunchSelectRoom());
	}
	
	@PostMapping("/roomuserinsert")
	public ResponseEntity<?> roomUserInfo(@RequestBody RoomJoin roomJoin){

//		System.out.println("controller: " + roomJoin);
		lunchSelectService.insertGest(roomJoin);
		return ResponseEntity.ok().body(null);
	}
	
	
	
	
}
