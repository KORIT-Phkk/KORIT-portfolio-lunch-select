package com.korit.lunchSelect.entity;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class MasterRoomJoin {

	private String masterURL;
	private int userId;
	private List<Integer> categoryId;
}
