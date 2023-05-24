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
import com.korit.lunchSelect.entity.GuestRoomJoin;
import com.korit.lunchSelect.entity.MasterRoomJoin;
import com.korit.lunchSelect.entity.Room;
import com.korit.lunchSelect.repository.LunchSelectRepository;
import com.korit.lunchSelect.security.PrincipalUser;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class LunchSelectService {

   
   private final LunchSelectRepository lunchSelectRepository;
   
   public int findRoomByMasterId(int masterId) {
      
      return lunchSelectRepository.findRoomByMasterId(masterId);
   }
   
   public List<String> lunchSelect(LunchSelectReqDto lunchSelectReqDto) {
      
      int roomId = findRoomByMasterId(lunchSelectReqDto.getMasterId()); 
      
      Map<String, Object> map = new HashMap<>();
      map.put("masterId", lunchSelectReqDto.getMasterId());
      map.put("lat", lunchSelectReqDto.getLat());
      map.put("lng", lunchSelectReqDto.getLng());
      map.put("roomId", roomId);
      
//      System.out.println("roomURL" + createLunchSelectRoom());
//      System.out.println("DB in service: " + lunchSelectRepository.findByLocation(map));
//      System.out.println("DB in service: " + lunchSelectRepository.findByLocation(map).getClass());
      Random random = new Random();
      System.out.println(lunchSelectRepository.findMenuByLocation(map));

//      int randomIndex = random.nextInt(lunchSelectRepository.findByLocation(map).size());
      
//      System.out.println(lunchSelectRepository.findByLocation(map).get(randomIndex)); 
//      System.out.println(randomIndex);
//      return lunchSelectRepository.findMenuByLocation(map);
      return lunchSelectRepository.findMenuByLocation(map);
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
      

//      System.out.println("map: " + insertMap);
      lunchSelectRepository.roomGuestInsert(insertMap);
      

      return 0;
   }
   
   public int roomUpdateFlag(String roomMasterCode) {
      return lunchSelectRepository.roomUpdateFlag(roomMasterCode);
   }

   public int insertMaster(MasterRoomJoin masterRoomJoin) {
      Map<String, Object> insertMap = new HashMap<>();
      
      insertMap.put("masterURL", masterRoomJoin.getMasterURL());
      insertMap.put("userId",masterRoomJoin.getUserId());
      insertMap.put("categoryIds",masterRoomJoin.getCategoryId());
      
      System.out.println("service: " + masterRoomJoin);
      lunchSelectRepository.roomMasterInsert(insertMap);
      
      return 0;
   }

}