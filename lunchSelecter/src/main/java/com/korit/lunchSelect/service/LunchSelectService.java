package com.korit.lunchSelect.service;


import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Value;
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
import com.korit.lunchSelect.exception.CustomException;
import com.korit.lunchSelect.exception.ErrorMap;
import com.korit.lunchSelect.repository.LunchSelectRepository;
import com.korit.lunchSelect.security.PrincipalUser;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class LunchSelectService {
	
	private final LunchSelectRepository lunchSelectRepository;
	
	@Value("${config.front-end-url}")
	private String frontEndUrl;
	
	public String createLunchSelectRoom() {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		PrincipalUser principalUser = (PrincipalUser) authentication.getPrincipal();
		
		if(findDuplicatedActiveRoom(principalUser.getUserId()) != null) {
			Room exitRoom = findDuplicatedActiveRoom(principalUser.getUserId());
			updateRoomFlag(exitRoom.getRoomMasterCode(), 0);
		}
		
		
		Room room = Room.builder()
				.roomMasterCode(UUID.randomUUID().toString().replaceAll("-", ""))
				.roomGuestCode(UUID.randomUUID().toString().replaceAll("-", ""))
				.roomMasterId(principalUser.getUserId())
				.build();

      lunchSelectRepository.createLunchSelectRoom(room);

      return frontEndUrl + "/lunchselect/room/master/" + room.getRoomMasterCode();
	}
	
	public Room findDuplicatedActiveRoom(int userId) {
		return lunchSelectRepository.findActiveRoomByMasterId(userId);
	}
	
	public int createRoomJoin(InsertCategoryReqDto insertCategoryReqDto) {
		Map<String, Object> insertMap = new HashMap<>();
		if(insertCategoryReqDto.getCategoryId().size() == 0) {
			throw new CustomException("error", ErrorMap.builder().put("category", "카테고리를 하나 이상 선택해 주세요!!").build());
		}
	
		if(!(insertCategoryReqDto.getCode().startsWith("0") || insertCategoryReqDto.getCode().startsWith("1"))) {
			insertMap.put("userId", 0);
		} else {
			Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
			PrincipalUser principalUser = (PrincipalUser) authentication.getPrincipal();
			insertMap.put("userId",principalUser.getUserId());						
		}
		insertMap.put("roomId", findRoomByCode(insertCategoryReqDto.getCode()).getRoomId());
		insertMap.put("categoryIds",insertCategoryReqDto.getCategoryId());

		return lunchSelectRepository.saveRoomJoin(insertMap);
	}
	
	public Room findRoomByCode(String code) {
		if(code.startsWith("0")) {
			return lunchSelectRepository.findRoomByMasterCode(code.substring(2));
		} else if(code.startsWith("1")) {
			return lunchSelectRepository.findRoomByGuestCode(code.substring(2));
		} else if(code.startsWith("2")) {
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
	
	public int updateRoomFlag(String roomMasterCode, int flag) {
		Map<String, Object> map = new HashMap<>();
		
		map.put("roomMasterCode", roomMasterCode);
		map.put("flag", flag);
		
		return lunchSelectRepository.updateRoomFlag(map);
	}
	
    public List<Category> getCategory(){
        return lunchSelectRepository.getCategory();
    }
    
    public String getGuestURL(String roomMasterCode) {
    
		Room room = lunchSelectRepository.findRoomByMasterCode(roomMasterCode);   
		if(room == null) {
			throw new CustomException("error", ErrorMap.builder().put("room", "방을 새로 만들어주세요.").build());
		}
    
 	    return room.getRoomGuestCode();
    }
    
    public Map<String, Object> checkFlagAndSelectedMenu(String code) {
    	Map<String, Object> map = new HashMap<>();
    	
    	try {
    		map.put("flag", lunchSelectRepository.findRoomByGuestCode(code).getFlag());
    		map.put("restaurantName", lunchSelectRepository.findRoomByGuestCode(code).getRestaurant().getRestaurantName());    		    		    		
    	} catch(Exception e){
    		
    	}

    	return map;
    }

}

