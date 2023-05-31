package com.korit.lunchSelect.dto.lunchselect;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class SelectedMenuRespDto {
	private int restaurantId;
	private String restaurantName;
	private String restaurantAddress;
}
