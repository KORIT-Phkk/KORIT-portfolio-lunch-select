package com.korit.lunchSelect.dto.lunchselect;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class LunchSelectRespDto {

	private int masterId;
	private String roomMasterCode;
	private String lat;
	private String lng;
}
