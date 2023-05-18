package com.korit.lunchSelect.repository;

import org.apache.ibatis.annotations.Mapper;

import com.korit.lunchSelect.entity.Room;

@Mapper
public interface LunchSelectRepository {
	
	public int createLunchSelectRoom(Room room);
}
