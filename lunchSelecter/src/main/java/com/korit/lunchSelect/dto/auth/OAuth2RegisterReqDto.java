package com.korit.lunchSelect.dto.auth;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.korit.lunchSelect.entity.User;

import lombok.Data;

@Data
public class OAuth2RegisterReqDto {

	private String email;
	
	
	@Pattern(regexp = "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,16}$", 
			message = "비밀번호는 영문자, 숫자, 특수문자를 포함하여 8 ~ 16자로 작성하세요.")
	private String password;
	
	private String checkPassword;
	
	@Pattern(regexp = "^[가-힣]{2,7}$",
			message = "한글이름만 작성 가능합니다.")
	private String name;
	
	@NotBlank(message = "연락처를 입력하세요")
	private String phone;
	
	private String provider;
	
	public User toEntity() {
		return User.builder()
				.email(email)
				.name(name)
				.password(new BCryptPasswordEncoder().encode(password))
				.phone(phone)
				.provider(provider)
				.build();
	}
}
