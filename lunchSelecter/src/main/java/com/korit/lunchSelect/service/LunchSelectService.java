package com.korit.lunchSelect.service;


import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;
import java.util.UUID;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.korit.lunchSelect.dto.GetMenusReqDto;
import com.korit.lunchSelect.dto.room.InsertCategoryReqDto;
import com.korit.lunchSelect.entity.Menu;
import com.korit.lunchSelect.entity.Room;
import com.korit.lunchSelect.repository.LunchSelectRepository;
import com.korit.lunchSelect.security.PrincipalUser;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class LunchSelectService {

	
	private final LunchSelectRepository lunchSelectRepository;
	
	public String createLunchSelectRoom() {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		PrincipalUser principalUser = (PrincipalUser) authentication.getPrincipal();
		
		Room room = Room.builder()
				.roomMasterCode(UUID.randomUUID().toString().replaceAll("-", ""))
				.roomGuestCode(UUID.randomUUID().toString().replaceAll("-", ""))
				.roomMasterId(principalUser.getUserId())
				.build();

		lunchSelectRepository.createLunchSelectRoom(room);

		return "http://localhost:3000/lunchselect/room/master/" + room.getRoomMasterCode();
	}
	
	public int createRoomJoin(InsertCategoryReqDto insertCategoryReqDto) {
		Map<String, Object> insertMap = new HashMap<>();
		
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		PrincipalUser principalUser = (PrincipalUser) authentication.getPrincipal();
		
		insertMap.put("roomId", findRoomIdByCode(insertCategoryReqDto.getCode()));
		insertMap.put("userId",principalUser.getUserId());
		insertMap.put("categoryIds",insertCategoryReqDto.getCategoryId());

		return lunchSelectRepository.saveRoomJoin(insertMap);
	}
	
	public Integer findRoomIdByCode(String code) {
		if(code.startsWith("0")) {
			return lunchSelectRepository.findRoomIdByMasterCode(code.substring(2));
		} else if(code.startsWith("1")) {
			return lunchSelectRepository.findRoomIdByGuestCode(code.substring(2));
		}
		return 0;
	}
	

	public boolean checkRoom(String guestCode) {	
		if(lunchSelectRepository.findRoomIdByGuestCode(guestCode) == null) {
			return false;
		} 
		
		return true;
	}
	
	public List<Menu> getMenuList(GetMenusReqDto getMenusReqDto) {
		return lunchSelectRepository.getMenuList(getMenusReqDto.toMap());
	}
	
	public Menu lunchResult(List<Menu> list){
		Random random = new Random();
		
		int randomIndex = random.nextInt(list.size());
		
		Menu randomLunchSelect = list.get(randomIndex);
		
		return randomLunchSelect;

	}


	

	
	public String getGuestURL(String roomMasterCode) {
		
		return lunchSelectRepository.getGuestURL(roomMasterCode);
	}

		
	

	
	public int roomUpdateFlag(String roomMasterCode) {
		return lunchSelectRepository.roomUpdateFlag(roomMasterCode);
	}
	
}
