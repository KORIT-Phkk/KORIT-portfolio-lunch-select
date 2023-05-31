package com.korit.lunchSelect.repository;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.korit.lunchSelect.entity.Category;
import com.korit.lunchSelect.entity.Menu;
import com.korit.lunchSelect.entity.Room;

@Mapper
public interface LunchSelectRepository {
	public int createLunchSelectRoom(Room room);
	public Room findRoomByMasterCode(String code);
	public Room findRoomByGuestCode(String code);
	public Room findActiveRoomByMasterId(int userId);
	public int saveRoomJoin(Map<String, Object> map);
	
	public String checkRoom(String guestURL);
	public List<Menu> getMenuList(Map<String, Object> map);

	public int roomUserInsert(Map<String, Object> map);
	public int updateRoomFlag(Map<String, Object> map);
	
	public List<Category> getCategory();
	
	public int updateRoomMenu(Room room);
}
