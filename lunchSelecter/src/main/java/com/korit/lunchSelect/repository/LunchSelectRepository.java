package com.korit.lunchSelect.repository;

import java.util.List;
import java.util.Map;
import org.apache.ibatis.annotations.Mapper;
import com.korit.lunchSelect.entity.Room;

@Mapper
public interface LunchSelectRepository {
	
	public List<String> findByLocation(Map<String, Object> map);
	public int createLunchSelectRoom(Room room);
	public int findByMasterRoomId(String guestUrl);
	public int findMasterUserIdByRoomId(Map<String, Object> map);
}
