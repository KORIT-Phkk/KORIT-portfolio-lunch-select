package com.korit.lunchSelect.dto.auth;

import lombok.Data;

@Data
public class LoginReqDto {
	
	private String email;
	
	private String password;
}
