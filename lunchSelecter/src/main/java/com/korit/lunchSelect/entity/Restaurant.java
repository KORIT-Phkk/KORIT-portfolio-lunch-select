package com.korit.lunchSelect.entity;

import com.korit.lunchSelect.dto.lunchselect.SelectLunchRespDto;

import lombok.Data;

@Data
public class Restaurant {
	private int restaurantId;
	private String restaurantName;
	private String restaurantAddress;
	
	public SelectLunchRespDto toDto() {
		return SelectLunchRespDto.builder()
								.restaurantName(restaurantName)
								.restaurantAddress(restaurantAddress)
								.build();
	}
}
