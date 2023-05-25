package com.korit.lunchSelect.controller;


import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.korit.lunchSelect.dto.LunchSelectReqDto;
import com.korit.lunchSelect.dto.room.InsertCategoryReqDto;
import com.korit.lunchSelect.service.RoomService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/lunchselect")
@RequiredArgsConstructor

public class LunchSelectController {
//	@GetMapping("/room/guest")
//	@GetMapping("/room/ckeck")
//	@PostMapping("/room/guest/category")
//	@PostMapping("/room/master/category")
	private final RoomService roomService;
	
	@PostMapping("/room/create")
	public ResponseEntity<?> createLunchSelectRoom(){
		return ResponseEntity.ok().body(roomService.createLunchSelectRoom());
	}
		
	@PostMapping("/room/insert/category")
	public ResponseEntity<?> insertCategory(@RequestBody InsertCategoryReqDto insertCategoryReqDto){
		return ResponseEntity.ok().body(roomService.createRoomJoin(insertCategoryReqDto));
	} 
		
	@GetMapping("/room/check")
	public ResponseEntity<?> checkroom(String code){
		return ResponseEntity.ok().body(roomService.checkRoom(code));
	}

	
	@PutMapping("/room/updateflag")
	public ResponseEntity<?> updateFlag(@RequestBody Map<String, String> requestData ){
		return ResponseEntity.ok().body(roomService.roomUpdateFlag(requestData.get("roomMasterCode")));
	}
	
	@GetMapping("/getmenus")
	public ResponseEntity<?> getMenus(LunchSelectReqDto lunchSelectReqDto) {
		System.out.println(lunchSelectReqDto);
		return ResponseEntity.ok(null);
	}
	
	
	
}
