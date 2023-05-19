package com.korit.lunchSelect.service;


import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.korit.lunchSelect.dto.LunchSelectReqDto;
import com.korit.lunchSelect.entity.Room;
import com.korit.lunchSelect.entity.RoomJoin;
import com.korit.lunchSelect.repository.LunchSelectRepository;
import com.korit.lunchSelect.security.PrincipalUser;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class LunchSelectService {

	
	private final LunchSelectRepository lunchSelectRepository;
	
	public List<String> lunchSelect(LunchSelectReqDto lunchSelectReqDto) {
		
		Map<String, Object> map = new HashMap<>();
		map.put("lat", lunchSelectReqDto.getLat());
		map.put("lng", lunchSelectReqDto.getLng());
//	
//		System.out.println("DTO: " + lunchSelectReqDto);
//		System.out.println("DB: " + lunchSelectRepository.findByLocation(map));
		return lunchSelectRepository.findByLocation(map);
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
		
		System.out.println("roomId : " + lunchSelectRepository.findMasterCode(principalUser.getUserId())); 
		return "http://localhost:3000/lunchselect/room/master/" + room.getRoomMasterCode();
	}
	
	public String roomUserInsert(String accessToken) {
	
		return null;
	}
	
}
