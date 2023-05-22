package com.korit.lunchSelect.service;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;
import java.util.UUID;

import org.springframework.mail.javamail.JavaMailSender;
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

		map.put("categoryIds", lunchSelectReqDto.getCategoryId());
		map.put("roomUrl", createLunchSelectRoom());
		
//		System.out.println("roomURL" + createLunchSelectRoom());
		System.out.println("DB in service: " + lunchSelectRepository.findByLocation(map));
		System.out.println("DB in service: " + lunchSelectRepository.findByLocation(map).getClass());
		Random random = new Random();

		int randomIndex = random.nextInt(lunchSelectRepository.findByLocation(map).size());
		
//		System.out.println(lunchSelectRepository.findByLocation(map).get(randomIndex)); 
//		System.out.println(randomIndex);
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
		
		return "http://localhost:3000/lunchselect/room/master/" + room.getRoomMasterCode();
	}


	public List<String> rouletteResult(LunchSelectReqDto lunchSelectReqDto) {
		
		return null;
	}
	
	public void insertGest(RoomJoin roomJoin) {
		
		lunchSelectRepository.findByMasterRoomId(roomJoin.getGuestUrl());
		System.out.println("sercvice: " + lunchSelectRepository.findByMasterRoomId(roomJoin.getGuestUrl()));
	}
}
