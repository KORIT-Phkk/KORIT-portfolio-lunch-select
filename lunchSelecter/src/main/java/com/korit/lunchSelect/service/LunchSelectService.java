package com.korit.lunchSelect.service;


import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;
import java.util.UUID;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.korit.lunchSelect.dto.lunchselect.GetMenusReqDto;
import com.korit.lunchSelect.dto.lunchselect.InsertCategoryReqDto;
import com.korit.lunchSelect.dto.lunchselect.SelectLunchReqDto;
import com.korit.lunchSelect.dto.lunchselect.SelectedMenuRespDto;
import com.korit.lunchSelect.entity.Category;
import com.korit.lunchSelect.entity.Menu;
import com.korit.lunchSelect.entity.Restaurant;
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
		
		insertMap.put("roomId", findRoomByCode(insertCategoryReqDto.getCode()).getRoomId());
		insertMap.put("userId",principalUser.getUserId());
		insertMap.put("categoryIds",insertCategoryReqDto.getCategoryId());

		return lunchSelectRepository.saveRoomJoin(insertMap);
	}
	
	public Room findRoomByCode(String code) {
		if(code.startsWith("0")) {
			return lunchSelectRepository.findRoomByMasterCode(code.substring(2));
		} else if(code.startsWith("1")) {
			return lunchSelectRepository.findRoomByGuestCode(code.substring(2));
		}
		return null;
	}
	

	public boolean checkRoom(String guestCode) {	
		if(lunchSelectRepository.findRoomByGuestCode(guestCode) == null) {
			return false;
		} 
		return true;
	}
	
	public List<Menu> getMenuList(GetMenusReqDto getMenusReqDto) {
		return lunchSelectRepository.getMenuList(getMenusReqDto.toMap());
	}
	
	public int selectMenu(SelectLunchReqDto selectLunchReqDto){
		List<Menu> menuList = selectLunchReqDto.getMenuList();
		Random random = new Random();
		int randomIndex = random.nextInt(menuList.size());
		Menu randomMenu = menuList.get(randomIndex);
		
		Room room = findRoomByCode(selectLunchReqDto.getRoomMasterCode());
		room.setRestaurantId(randomMenu.getId());
		return lunchSelectRepository.updateRoomMenu(room);
	}
	
	public SelectedMenuRespDto getSelectedMenu(String code) {
		return findRoomByCode(code).getRestaurant().toDto();
	}

	public String getGuestURL(String roomMasterCode) {
		return lunchSelectRepository.getGuestURL(roomMasterCode);
	}

	
	public int roomUpdateFlag(String roomMasterCode) {
		return lunchSelectRepository.roomUpdateFlag(roomMasterCode);
	}
	
    public List<Category> getCategory(){
        return lunchSelectRepository.getCategory();
    }

}
