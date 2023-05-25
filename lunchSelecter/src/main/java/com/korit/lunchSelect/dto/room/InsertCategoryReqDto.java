package com.korit.lunchSelect.dto.room;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class InsertCategoryReqDto {
	private String Code;
	private List<Integer> categoryId;
}
