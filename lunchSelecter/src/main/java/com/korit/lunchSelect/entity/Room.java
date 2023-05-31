package com.korit.lunchSelect.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Room {
	private int roomId;
	private String roomMasterCode;
	private String roomGuestCode;
	private int roomMasterId;
	private int restaurantId;
	private Restaurant restaurant;
	private int flag;
}
