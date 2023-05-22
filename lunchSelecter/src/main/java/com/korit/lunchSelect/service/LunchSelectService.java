package com.korit.lunchSelect.service;
import java.util.UUID;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

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
				.roomURL(UUID.randomUUID().toString().replaceAll("-", ""))
				.roomMasterId(principalUser.getUserId())
				.build();
		
		lunchSelectRepository.createLunchSelectRoom(room);
		
		return "http://localhost:3000/lunchselect/room/" + room.getRoomURL();
	}
	
}
