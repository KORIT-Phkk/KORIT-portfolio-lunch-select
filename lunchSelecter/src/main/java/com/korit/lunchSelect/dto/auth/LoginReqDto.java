package com.korit.lunchSelect.dto.auth;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

import lombok.Data;

@Data
public class LoginReqDto {
	
	private String email;
	
	private String password;
}
