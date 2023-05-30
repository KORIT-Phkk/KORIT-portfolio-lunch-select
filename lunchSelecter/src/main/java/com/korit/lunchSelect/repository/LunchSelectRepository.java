package com.korit.lunchSelect.repository;


import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.korit.lunchSelect.entity.Menu;
import com.korit.lunchSelect.entity.Room;

@Mapper
public interface LunchSelectRepository {
	public int createLunchSelectRoom(Room room);
	public Integer findRoomIdByMasterCode(String code);
	public Integer findRoomIdByGuestCode(String code);
	public int saveRoomJoin(Map<String, Object> map);
	
	public String checkRoom(String guestURL);
	public List<Menu> getMenuList(Map<String, Object> map);

	

	public int findMasterCode(int userId);
	public int roomUserInsert(Map<String, Object> map);
	public int roomUpdateFlag(String roomMasterCode);

	public String getGuestURL(String roomMasterCode);
}
