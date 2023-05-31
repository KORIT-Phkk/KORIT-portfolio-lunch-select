package com.korit.lunchSelect.dto.lunchselect;

import java.util.List;

import com.korit.lunchSelect.entity.Menu;

import lombok.Data;

@Data
public class SelectLunchReqDto {
	private String roomMasterCode;
	private List<Menu> menuList;
}
