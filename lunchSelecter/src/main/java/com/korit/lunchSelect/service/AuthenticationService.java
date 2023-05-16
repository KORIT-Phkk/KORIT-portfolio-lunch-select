package com.korit.lunchSelect.service;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.korit.lunchSelect.dto.auth.JwtRespDto;
import com.korit.lunchSelect.dto.auth.LoginReqDto;
import com.korit.lunchSelect.dto.auth.SignupDto;
import com.korit.lunchSelect.entity.Authority;
import com.korit.lunchSelect.entity.User;
import com.korit.lunchSelect.exception.CustomException;
import com.korit.lunchSelect.exception.ErrorMap;
import com.korit.lunchSelect.repository.UserRepository;
import com.korit.lunchSelect.security.jwt.JwtTokenProvider;
import com.korit.lunchSelect.security.jwt.PrincipalUser;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationService implements UserDetailsService {
	private final UserRepository userRepository;
	private final AuthenticationManagerBuilder authenticationManagerBuilder;
	private final JwtTokenProvider jwtTokenProvider;
	
	public void checkDuplicatedEmail(String email) {
		if(userRepository.findUserByEmail(email) != null) {
			throw new CustomException("Duplicated Email", 
					ErrorMap.builder().put("email", "사용중인 이메일입니다").build());
		}
	}
	
	public void signup(SignupDto signupDto) {
		User userEntity = signupDto.toEntity();
		
		userRepository.saveUser(userEntity);
		
		userRepository.saveAuthority(Authority.builder()
				.userId(userEntity.getUserId())
				.roleId(2)
				.build());
	}
	
	public String signin(LoginReqDto loginReqDto) {
		UsernamePasswordAuthenticationToken authenticationToken =
				new UsernamePasswordAuthenticationToken(loginReqDto.getEmail(), loginReqDto.getPassword());
		
		Authentication authentication = authenticationManagerBuilder.getObject().authenticate(authenticationToken);
		
		return jwtTokenProvider.generateToken(authentication);
	}
	
	public PrincipalUser getUserInfo(String accessToken) {
		String email = jwtTokenProvider.getClaims(jwtTokenProvider.getToken(accessToken)).getSubject();
		User userEntity = userRepository.findUserByEmail(email); 
		return userEntity.toPrincipal();
				
	}
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User userEntity = userRepository.findUserByEmail(username);
		
		return userEntity.toPrincipal();
	}
	
	public boolean authenticate(String accessToken) {
		return jwtTokenProvider.validateToken(jwtTokenProvider.getToken(accessToken));
	}
}
