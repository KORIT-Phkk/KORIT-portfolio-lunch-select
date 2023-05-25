package com.korit.lunchSelect.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class LunchSelect {

	private int id;
	private String name;
	private String address;
	private String category;
	private String lat;
	private String lng;
	private int categoryCount;
	
	private Category categories;
}
