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
public class RoomJoin {
	private int userId;
	private String guestUrl;
//	private List<Integer> categoryId;
}
