package com.korit.lunchSelect.entity;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class GuestRoomJoin {
	
	private String guestURL;
	private int userId;
	private List<Integer> categoryId;
}