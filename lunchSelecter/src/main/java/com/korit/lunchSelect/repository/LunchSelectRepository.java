package com.korit.lunchSelect.repository;

import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface LunchSelectRepository {

	public Map<String, Object> findByLocation(Map<String, Object> map);
}
