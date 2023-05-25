package com.korit.lunchSelect.service;


import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;
import java.util.UUID;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.korit.lunchSelect.dto.LunchSelectReqDto;
import com.korit.lunchSelect.dto.room.InsertCategoryReqDto;
import com.korit.lunchSelect.entity.LunchSelect;
import com.korit.lunchSelect.entity.Room;
import com.korit.lunchSelect.repository.RoomRepository;
import com.korit.lunchSelect.security.PrincipalUser;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class RoomService {

	
	private final RoomRepository roomRepository;
	
	public String createLunchSelectRoom() {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		PrincipalUser principalUser = (PrincipalUser) authentication.getPrincipal();
		
		Room room = Room.builder()
				.roomMasterCode(UUID.randomUUID().toString().replaceAll("-", ""))
				.roomGuestCode(UUID.randomUUID().toString().replaceAll("-", ""))
				.roomMasterId(principalUser.getUserId())
				.build();

		roomRepository.createLunchSelectRoom(room);

		return "http://localhost:3000/lunchselect/room/master/" + room.getRoomMasterCode();
	}
	
	public int createRoomJoin(InsertCategoryReqDto insertCategoryReqDto) {
		Map<String, Object> insertMap = new HashMap<>();
		
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		PrincipalUser principalUser = (PrincipalUser) authentication.getPrincipal();
		
		insertMap.put("roomId", findRoomIdByCode(insertCategoryReqDto.getCode()));
		insertMap.put("userId",principalUser.getUserId());
		insertMap.put("categoryIds",insertCategoryReqDto.getCategoryId());

		return roomRepository.saveRoomJoin(insertMap);
	}
	
	public Integer findRoomIdByCode(String code) {
		if(code.startsWith("0")) {
			return roomRepository.findRoomIdByMasterCode(code.substring(2));
		} else if(code.startsWith("1")) {
			return roomRepository.findRoomIdByGuestCode(code.substring(2));
		}
		return 0;
	}
	

	public boolean checkRoom(String guestCode) {	
		if(roomRepository.findRoomIdByGuestCode(guestCode) == null) {
			return false;
		} 
		
		return true;
	}
	
	
	
	
	
	

	public Map<String, Object> lunchSelect(LunchSelectReqDto lunchSelectReqDto) {
		Map<String, Object> resultMap = new HashMap<>();
				
		Map<String, Object> map = new HashMap<>();
		map.put("masterId", lunchSelectReqDto.getMasterId());
		map.put("roomMasterCode", lunchSelectReqDto.getRoomMasterCode());
		map.put("lat", lunchSelectReqDto.getLat());
		map.put("lng", lunchSelectReqDto.getLng());
		
		List<LunchSelect> a = lunchSelectRepository.lunchSelect(map);
		
		LunchSelect result = lunchResult(a);
		
		resultMap.put("list", a);
		resultMap.put("result", result);
		
		return resultMap;
	}
	
	public LunchSelect lunchResult(List<LunchSelect> list){
		Random random = new Random();
		
		int randomIndex = random.nextInt(list.size());
		
		LunchSelect randomLunchSelect = list.get(randomIndex);
		
		return randomLunchSelect;

	}


	

	
	public String getGuestURL(String roomMasterCode) {
		
		return lunchSelectRepository.getGuestURL(roomMasterCode);
	}

		
	

	
	public int roomUpdateFlag(String roomMasterCode) {
		return lunchSelectRepository.roomUpdateFlag(roomMasterCode);
	}
	
}
