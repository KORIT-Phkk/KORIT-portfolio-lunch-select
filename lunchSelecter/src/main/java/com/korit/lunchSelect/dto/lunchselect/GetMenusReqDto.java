package com.korit.lunchSelect.dto.lunchselect;

import java.util.HashMap;
import java.util.Map;

import com.korit.lunchSelect.entity.Menu;

import lombok.Data;

@Data
public class GetMenusReqDto {

	private String roomMasterCode;
	private String lat;
	private String lng;
	
	public Map<String, Object> toMap() {
		Map<String, Object> map = new HashMap<>();
		
		map.put("roomMasterCode", roomMasterCode);
		map.put("lat", lat);
		map.put("lng", lng);
		
		return map;
	}
}
