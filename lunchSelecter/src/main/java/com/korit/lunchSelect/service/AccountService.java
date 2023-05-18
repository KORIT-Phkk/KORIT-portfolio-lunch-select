package com.korit.lunchSelect.service;

import java.time.Duration;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import javax.mail.internet.MimeMessage;

import org.springframework.cache.Cache;
import org.springframework.cache.CacheManager;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.ValueOperations;
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
	
	
    public String getEmailFromToken(String token) {
    	
    	return null;
    }
	
	public String generateResetEmailToken(String email) {
		User userEntity = userRepository.findUserByEmail(email);
		String token = UUID.randomUUID().toString().replaceAll("-", "");
		Cache cache = cacheManager.getCache("passwordResetToken");
		
		if(userEntity == null) {
			throw new CustomException("Undefind User", 
					ErrorMap.builder().put("error", "사용자를 찾을 수 없습니다.").build());
		}
		
        if (cache != null) {
            cache.put(token, email);
            cache.evict(token, Duration.ofMinutes(30));
        }
		
		return token;
	}
	
	public void sendUpdatePasswordEmail(String email) {
		String token = generateResetEmailToken(email);
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
