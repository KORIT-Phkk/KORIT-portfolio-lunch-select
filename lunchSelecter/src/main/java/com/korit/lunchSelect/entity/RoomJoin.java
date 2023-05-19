package com.korit.lunchSelect.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class RoomJoin {
	private int roomJoinId;
	private int roomId;
	private int userId;
	private int categoryId;
}
