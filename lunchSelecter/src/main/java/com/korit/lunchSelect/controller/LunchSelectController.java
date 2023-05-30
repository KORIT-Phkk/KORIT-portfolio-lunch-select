package com.korit.lunchSelect.controller;


import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.korit.lunchSelect.dto.GetMenusReqDto;
import com.korit.lunchSelect.dto.room.InsertCategoryReqDto;
import com.korit.lunchSelect.service.LunchSelectService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/lunchselect")
@RequiredArgsConstructor
public class LunchSelectController {
	private final LunchSelectService lunchSelectService;
	
	@PostMapping("/room/create")
	public ResponseEntity<?> createLunchSelectRoom() {
		return ResponseEntity.ok().body(lunchSelectService.createLunchSelectRoom());
	}
		
	@PostMapping("/room/insert/category")
	public ResponseEntity<?> insertCategory(@RequestBody InsertCategoryReqDto insertCategoryReqDto) {
		return ResponseEntity.ok().body(lunchSelectService.createRoomJoin(insertCategoryReqDto));
	} 
		
	@GetMapping("/room/check")
	public ResponseEntity<?> checkroom(String code) {
		return ResponseEntity.ok().body(lunchSelectService.checkRoom(code));
	}
	
	@PutMapping("/room/updateflag")
	public ResponseEntity<?> updateFlag(@RequestBody Map<String, String> requestData) {
		return ResponseEntity.ok().body(lunchSelectService.roomUpdateFlag(requestData.get("roomMasterCode")));
	}
	
	@GetMapping("/getmenus")
	public ResponseEntity<?> getMenus(GetMenusReqDto getMenusReqDto) {
		System.out.println(getMenusReqDto);
		System.out.println(lunchSelectService.getMenuList(getMenusReqDto));
		return ResponseEntity.ok(lunchSelectService.getMenuList(getMenusReqDto));
	}
	
	public ResponseEntity<?> getResult() {
	
		return null;
	}
	
	
}
