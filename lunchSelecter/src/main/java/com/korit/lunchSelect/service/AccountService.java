package com.korit.lunchSelect.service;

import java.time.Duration;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import javax.mail.internet.MimeMessage;

import org.springframework.cache.Cache;
import org.springframework.cache.CacheManager;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import com.korit.lunchSelect.dto.account.FindEmailReqDto;
import com.korit.lunchSelect.entity.User;
import com.korit.lunchSelect.exception.CustomException;
import com.korit.lunchSelect.exception.ErrorMap;
import com.korit.lunchSelect.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AccountService {
	
	private final UserRepository userRepository;
	private final JavaMailSender javaMailSender;
	private final CacheManager cacheManager;
	
	public String findEmail(FindEmailReqDto findEmailReqDto) {
		Map<String, Object> map = new HashMap<>();
		
		map.put("name", findEmailReqDto.getName());
		map.put("phone", findEmailReqDto.getPhone());
		
		User userEntity = userRepository.findUserByNameAndPhone(map);
		
		
		if(userEntity == null) {
			throw new CustomException("Undefind User", 
					ErrorMap.builder().put("error", "사용자를 찾을 수 없습니다.").build());
		}
	
		return userEntity.getEmail();
	}
	
	public void resetPassword(User userEntity) {
		
	}
	
	public User findUserByToken(String token) {
		Map<String, Object> tokenMap = validateToken(token);
		return userRepository.findUserByEmail((String) tokenMap.get("email"));
	}
	
	public boolean isTokenExpired(LocalDateTime expirationTime) {
		LocalDateTime currentTime = LocalDateTime.now();
		return currentTime.isBefore(expirationTime);
	}
	
    public Map<String, Object> validateToken(String token) {
        Cache cache = cacheManager.getCache("passwordResetToken");
        Cache.ValueWrapper valueWrapper = cache.get(token);
        
        Map<String, Object> tokenMap = (Map<String, Object>) valueWrapper.get();
        
        if(tokenMap == null) {
			throw new CustomException("Invalid Token", 
					ErrorMap.builder().put("error", "유효하지 않은 토큰입니다.").build());
        }
        
        if(isTokenExpired((LocalDateTime) tokenMap.get("expirationTime"))) {
			throw new CustomException("Expired Token", 
					ErrorMap.builder().put("error", "토큰이 만료되었습니다.").build());      	
        }
        
        return tokenMap;
    }
	
	public String generateResetPasswordToken(String email) {
		User userEntity = userRepository.findUserByEmail(email);
		String token = UUID.randomUUID().toString().replaceAll("-", "");

		if(userEntity == null) {
			throw new CustomException("Undefind User", 
					ErrorMap.builder().put("error", "사용자를 찾을 수 없습니다.").build());
		}
		
		saveTokenToCache(email, token);
		return token;
	}
	
	public void saveTokenToCache(String email, String token) {
		Map<String, Object> tokenMap = new HashMap<>();
		LocalDateTime expirationTime  = LocalDateTime.now().plus(Duration.ofMinutes(30));
		
		tokenMap.put("email", email);
		tokenMap.put("expirationTime", expirationTime);
		
		Cache cache = cacheManager.getCache("passwordResetToken");
		cache.put(token, tokenMap);
	}
	
	public void sendUpdatePasswordEmail(String email) {
		String token = generateResetPasswordToken(email);
		String url = "httpL//localhost:8080/auth/resetpassword?token=" + token;
		String subject = "비밀번호 재설정 안내";
		
		sendEmail(email, subject, url);
//		getEmailFromToken(token);
	}
	
	public void sendEmail(String to, String subject, String text) {
        try {
            MimeMessage message = javaMailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true);
            helper.setTo(to);
            helper.setSubject(subject);
            helper.setText(text, true);
            javaMailSender.send(message);
        } catch (Exception e) {
        	System.out.println(e);
        }
	}
}
