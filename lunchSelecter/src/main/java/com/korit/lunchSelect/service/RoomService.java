package com.korit.lunchSelect.service;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;
import java.util.UUID;

import javax.mail.FetchProfile.Item;

import org.springframework.context.annotation.Bean;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.korit.lunchSelect.dto.LunchSelectReqDto;
import com.korit.lunchSelect.dto.LunchSelectRespDto;
import com.korit.lunchSelect.entity.GuestRoomJoin;
import com.korit.lunchSelect.entity.LunchSelect;
import com.korit.lunchSelect.entity.MasterRoomJoin;
import com.korit.lunchSelect.entity.Room;
import com.korit.lunchSelect.repository.RoomRepository;
import com.korit.lunchSelect.security.PrincipalUser;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class RoomService {

	
	private final RoomRepository lunchSelectRepository;

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
	
	public String getGuestURL(String roomMasterCode) {
		
		return lunchSelectRepository.getGuestURL(roomMasterCode);
	}

	public boolean checkRoom(GuestRoomJoin guestRoomJoin) {				
		if(lunchSelectRepository.checkRoom(guestRoomJoin.getGuestURL()) == null) {
			return false;
		} else {
			return true;
		}
	}
		
	
	public int insertGuest(GuestRoomJoin roomJoin) {
		Map<String, Object> insertMap = new HashMap<>();
		
		insertMap.put("guestURL", roomJoin.getGuestURL());
		insertMap.put("userId",roomJoin.getUserId());
		insertMap.put("categoryIds",roomJoin.getCategoryId());
		
		lunchSelectRepository.roomGuestInsert(insertMap);
		

		return 0;
	}
	
	public int insertMaster(MasterRoomJoin masterRoomJoin) {
		Map<String, Object> insertMap = new HashMap<>();
		
		insertMap.put("masterURL", masterRoomJoin.getRoomMasterCode());
		insertMap.put("userId",masterRoomJoin.getUserId());
		insertMap.put("categoryIds",masterRoomJoin.getCategoryId());
		
		lunchSelectRepository.roomMasterInsert(insertMap);
		
		return 0;
	}
	
	public int roomUpdateFlag(String roomMasterCode) {
		return lunchSelectRepository.roomUpdateFlag(roomMasterCode);
	}
	
}
