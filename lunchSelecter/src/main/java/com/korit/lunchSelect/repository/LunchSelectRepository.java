package com.korit.lunchSelect.repository;


import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.korit.lunchSelect.entity.LunchSelect;
import com.korit.lunchSelect.entity.Room;

@Mapper
public interface LunchSelectRepository {
	
//	public int findRoomByMasterId(int masterId);
	public List<LunchSelect> lunchSelect(Map<String, Object> map);
	public int createLunchSelectRoom(Room room);

	public String checkRoom(String guestURL);
	public int roomGuestInsert(Map<String, Object> map);
	public int roomMasterInsert(Map<String, Object> map);

	public int findMasterCode(int userId);
	public int roomUserInsert(Map<String, Object> map);
	public int roomUpdateFlag(String roomMasterCode);

	public String getGuestURL(String roomMasterCode);
}
