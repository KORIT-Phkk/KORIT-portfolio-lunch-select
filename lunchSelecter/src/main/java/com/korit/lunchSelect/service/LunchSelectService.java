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
import com.korit.lunchSelect.repository.LunchSelectRepository;
import com.korit.lunchSelect.security.PrincipalUser;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class LunchSelectService {

	
	private final LunchSelectRepository lunchSelectRepository;

	public List<LunchSelect> lunchSelect(LunchSelectReqDto lunchSelectReqDto) {
				
		Map<String, Object> map = new HashMap<>();
		map.put("masterId", lunchSelectReqDto.getMasterId());
		map.put("roomMasterCode", lunchSelectReqDto.getRoomMasterCode());
		map.put("lat", lunchSelectReqDto.getLat());
		map.put("lng", lunchSelectReqDto.getLng());
		
//		System.out.println(map);
		List<LunchSelect> a = lunchSelectRepository.lunchSelect(map);
		return lunchSelectRepository.lunchSelect(map);
	}
	
	public LunchSelect lunchResult(LunchSelectReqDto lunchSelectReqDto){
		List<LunchSelect> lunchSelectList = lunchSelect(lunchSelectReqDto);
		
		Random random = new Random();
		
		int randomIndex = random.nextInt(lunchSelectList.size());
		
		LunchSelect randomLunchSelect = lunchSelectList.get(randomIndex);
		
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
		

//		System.out.println("map: " + insertMap);
		lunchSelectRepository.roomGuestInsert(insertMap);
		

		return 0;
	}
	
	public int roomUpdateFlag(String roomMasterCode) {
		return lunchSelectRepository.roomUpdateFlag(roomMasterCode);
	}

	public int insertMaster(MasterRoomJoin masterRoomJoin) {
		Map<String, Object> insertMap = new HashMap<>();
		
		insertMap.put("masterURL", masterRoomJoin.getRoomMasterCode());
		insertMap.put("userId",masterRoomJoin.getUserId());
		insertMap.put("categoryIds",masterRoomJoin.getCategoryId());
		
//		System.out.println("service: " + masterRoomJoin);
		lunchSelectRepository.roomMasterInsert(insertMap);
		
		return 0;
	}
	
}
