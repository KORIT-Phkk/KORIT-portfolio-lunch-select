package com.korit.lunchSelect.controller;


import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.korit.lunchSelect.dto.lunchselect.GetMenusReqDto;
import com.korit.lunchSelect.dto.lunchselect.InsertCategoryReqDto;
import com.korit.lunchSelect.dto.lunchselect.SelectLunchReqDto;
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
		
	@PostMapping("/room/category/insert")
	public ResponseEntity<?> insertCategory(@RequestBody InsertCategoryReqDto insertCategoryReqDto) {
		return ResponseEntity.ok().body(lunchSelectService.createRoomJoin(insertCategoryReqDto));
	} 
		
	@GetMapping("/room/check")
	public ResponseEntity<?> checkroom(String code) {
		return ResponseEntity.ok().body(lunchSelectService.checkRoom(code));
	}
	
	@PutMapping("/room/updateflag")
	public ResponseEntity<?> updateFlag(@RequestBody Map<String, String> requestData) {
		return ResponseEntity.ok().body(lunchSelectService.updateRoomFlag(requestData.get("code"), Integer.parseInt( requestData.get("flag"))));
	}
	
	@GetMapping("/menu/list")
	public ResponseEntity<?> getMenuList(GetMenusReqDto getMenusReqDto) {
		return ResponseEntity.ok(lunchSelectService.getMenuList(getMenusReqDto));
	}
	
	@PutMapping("/menu/select")
	public ResponseEntity<?> selectMenu(@RequestBody SelectLunchReqDto selectLunchReqDto) {
		return ResponseEntity.ok(lunchSelectService.selectMenu(selectLunchReqDto));
	}
	
	@GetMapping("/menu/result")
	public ResponseEntity<?> getSelectedMenu(String code) {
		return ResponseEntity.ok().body(lunchSelectService.getSelectedMenu(code));
	}
	
	@GetMapping("/room/getflag")
	public ResponseEntity<?> getFlagAndSelectedMenu(String code) {
		
		return ResponseEntity.ok().body(lunchSelectService.checkFlagAndSelectedMenu(code));
	}
	
	@GetMapping("/category")
	public ResponseEntity<?> getCategory() {
		return ResponseEntity.ok(lunchSelectService.getCategory());
	}
	
	@GetMapping("/guesturl")
	   public ResponseEntity<?> getGuestURL(String roomMasterCode) {
	      return ResponseEntity.ok().body(lunchSelectService.getGuestURL(roomMasterCode));
	}
}
