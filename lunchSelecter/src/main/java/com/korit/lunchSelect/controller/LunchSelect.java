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

		lunchSelectService.roomUserInsert(roomJoin);
//		System.out.println(map);
		//room_id, user_id, category_id  add
		return ResponseEntity.ok().body(null);
	}
	
	
	
	
}
