package com.korit.lunchSelect.entity;

import com.korit.lunchSelect.dto.lunchselect.SelectedMenuRespDto;

import lombok.Data;

@Data
public class Restaurant {
	private int restaurantId;
	private String restaurantName;
	private String restaurantAddress;
	
	public SelectedMenuRespDto toDto() {
		return SelectedMenuRespDto.builder()
									.restaurantId(restaurantId)
									.restaurantName(restaurantName)
									.restaurantAddress(restaurantAddress)
									.build();
	}
}
