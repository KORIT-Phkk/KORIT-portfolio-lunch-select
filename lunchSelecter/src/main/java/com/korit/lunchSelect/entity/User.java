package com.korit.lunchSelect.entity;

import java.util.List;

import com.korit.lunchSelect.security.PrincipalUser;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class User {
	private int userId;
	private String email;
	private String password;
	private String name;
	private String phone;
	private String provider;
	private String profileImg;
	
	private List<Authority> authorities;
	
	public PrincipalUser toPrincipal() {
		return PrincipalUser.builder()
				.userId(userId)
				.email(email)
				.password(password)
				.name(name)
				.phone(phone)
				.authorities(authorities)
				.profileImg(profileImg)
				.build();
	}
	
}
