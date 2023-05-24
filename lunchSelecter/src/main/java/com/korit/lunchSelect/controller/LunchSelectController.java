package com.korit.lunchSelect.controller;


import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.korit.lunchSelect.entity.GuestRoomJoin;
import com.korit.lunchSelect.entity.MasterRoomJoin;
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
	
	@GetMapping("/checkroom")
	public ResponseEntity<?> checkroom(GuestRoomJoin roomJoin){
		
//		System.out.println("controller: " + roomJoin);
		
		return ResponseEntity.ok().body(lunchSelectService.checkRoom(roomJoin));
	}

	@PostMapping("/roomuserinsert")
	public ResponseEntity<?> roomUserInfo(@RequestBody GuestRoomJoin roomJoin){
		
//		System.out.println("controller: " + roomJoin);
		
		return ResponseEntity.ok().body(lunchSelectService.insertGuest(roomJoin));
	}
	
	@PostMapping("/roommasterinsert")
	public ResponseEntity<?> masterJoinRoom(@RequestBody MasterRoomJoin masterRoomJoin){
		
//		System.out.println("controller: " + masterRoomJoin);
		
		return ResponseEntity.ok().body(lunchSelectService.insertMaster(masterRoomJoin));
	} 
	
	
	@PutMapping("/updateflag")
	public ResponseEntity<?> updateFlag(@RequestBody Map<String, String> requestData ){
		return ResponseEntity.ok().body(lunchSelectService.roomUpdateFlag(requestData.get("roomMasterCode")));
	}
	
	
	
}
