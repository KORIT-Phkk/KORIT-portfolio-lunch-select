package com.korit.lunchSelect.repository;


import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.korit.lunchSelect.entity.LunchSelect;
import com.korit.lunchSelect.entity.Room;

@Mapper
public interface RoomRepository {
	public int createLunchSelectRoom(Room room);
	public Integer findRoomIdByMasterCode(String code);
	public Integer findRoomIdByGuestCode(String code);
	
	public int saveRoomJoin(Map<String, Object> map);
	
	public List<LunchSelect> lunchSelect(Map<String, Object> map);

	public String checkRoom(String guestURL);

	public int findMasterCode(int userId);
	public int roomUserInsert(Map<String, Object> map);
	public int roomUpdateFlag(String roomMasterCode);

	public String getGuestURL(String roomMasterCode);
}
