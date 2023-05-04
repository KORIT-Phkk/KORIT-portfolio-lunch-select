package com.korit.lunchSelect.service;

import org.springframework.stereotype.Service;

import com.korit.lunchSelect.dto.auth.SignupDto;
import com.korit.lunchSelect.entity.User;
import com.korit.lunchSelect.exception.CustomException;
import com.korit.lunchSelect.exception.ErrorMap;
import com.korit.lunchSelect.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
	private final UserRepository userRepository;
	
	public void checkDuplicatedEmail(String email) {
		if(userRepository.findUserByEmail(email) != null) {
			System.out.println("이메일 중복");
			throw new CustomException("Duplicated Email", 
					ErrorMap.builder().put("email", "사용중인 이메일입니다").build());
		}
	}
	
	public void signup(SignupDto signupDto) {
		User userEntity = signupDto.toEntity();
		userRepository.saveUser(userEntity);
	}
}
