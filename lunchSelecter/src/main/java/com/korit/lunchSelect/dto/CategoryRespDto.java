package com.korit.lunchSelect.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class CategoryRespDto {

	private String categoryId;
	private String categoryName;
}
