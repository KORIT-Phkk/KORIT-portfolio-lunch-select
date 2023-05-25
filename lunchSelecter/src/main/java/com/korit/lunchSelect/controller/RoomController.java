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
import com.korit.lunchSelect.service.RoomService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/")
@RequiredArgsConstructor

public class RoomController {
//	@GetMapping("/room/guest")
//	@GetMapping("/room/ckeck")
//	@PostMapping("/room/guest/category")
//	@PostMapping("/room/master/category")
	private final RoomService lunchSelectService;
	
	@PostMapping("/room/create")
	public ResponseEntity<?> createLunchSelectRoom(){
		return ResponseEntity.ok().body(lunchSelectService.createLunchSelectRoom());
	}
	
	@GetMapping("/guesturl")
	public ResponseEntity<?> getGuestURL(String roomMasterCode) {
		
		return ResponseEntity.ok().body(lunchSelectService.getGuestURL(roomMasterCode));
	}
	
	@GetMapping("/checkroom")
	public ResponseEntity<?> checkroom(GuestRoomJoin guestRoomJoin){
		
//		System.out.println("controller: " + roomJoin);
		
		return ResponseEntity.ok().body(lunchSelectService.checkRoom(guestRoomJoin));
	}

	@PostMapping("/room/guest/category")
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
