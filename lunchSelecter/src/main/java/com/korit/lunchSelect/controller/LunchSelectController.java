package com.korit.lunchSelect.controller;

import java.util.Map;

//import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.korit.lunchSelect.entity.RoomFlag;
import com.korit.lunchSelect.entity.RoomJoin;
import com.korit.lunchSelect.service.AuthenticationService;
import com.korit.lunchSelect.service.LunchSelectService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/lunchselect")
@RequiredArgsConstructor
public class LunchSelectController {
	
	private final LunchSelectService lunchSelectService;
	
	@PostMapping("/room")
	public ResponseEntity<?> createLunchSelectRoom(){
		
		return ResponseEntity.ok().body(lunchSelectService.createLunchSelectRoom());
	}
	
	@PostMapping("/roomuserinsert")
	public ResponseEntity<?> roomUserInfo(@RequestBody RoomJoin roomJoin){

		lunchSelectService.roomUserInsert(roomJoin);
		
		return ResponseEntity.ok().body(null);
	}
	
	@PutMapping("/updateflag")
	public ResponseEntity<?> updateFlag(@RequestBody Map<String, String> requestData ){
		return ResponseEntity.ok().body(lunchSelectService.roomUpdateFlag(requestData.get("roomMasterCode")));
	}
	
	
	
}
