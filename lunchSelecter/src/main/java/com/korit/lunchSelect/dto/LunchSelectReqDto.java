package com.korit.lunchSelect.dto;

import java.util.List;

import com.korit.lunchSelect.entity.LunchSelect;

import lombok.Data;

@Data
public class LunchSelectReqDto {

	private String lat;
	private String lng;
	private List<String> categoryId;
	
	public LunchSelect toEntity() {
		return LunchSelect.builder()
				.lat(lat)
				.lng(lng)
				.build();
	}
}
