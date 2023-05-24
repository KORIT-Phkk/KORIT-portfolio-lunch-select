package com.korit.lunchSelect.util.cache;

import java.time.Duration;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import org.springframework.cache.Cache;
import org.springframework.cache.CacheManager;
import org.springframework.stereotype.Component;

import com.korit.lunchSelect.entity.User;
import com.korit.lunchSelect.exception.CustomException;
import com.korit.lunchSelect.exception.ErrorMap;
import com.korit.lunchSelect.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class CacheTokenProvider {

	private final UserRepository userRepository;
	private final CacheManager cacheManager;
	
    public void validateToken(Map<String, Object> tokenMap) {
        if(tokenMap == null) {
			throw new CustomException("Invalid Token", 
					ErrorMap.builder().put("error", "유효하지 않은 토큰입니다.").build());
        }
        
        if(isTokenExpired((LocalDateTime) tokenMap.get("expirationTime"))) {
			throw new CustomException("Expired Token", 
					ErrorMap.builder().put("error", "요청시간이 만료되었습니다.").build());
        }
    }
    
	
    public boolean isTokenExpired(LocalDateTime expirationTime) {
    	LocalDateTime currentTime = LocalDateTime.now();
    	return !currentTime.isBefore(expirationTime);
    }
    
    public User findUserByToken(String token) {
		Map<String, Object> tokenMap = getTokenMap("passwordResetToken", token);
		String email = (String) tokenMap.get("email");
		return userRepository.findUserByEmail(email);
	}
	
	
	public Map<String, Object> getTokenMap(String key, String token) {
        Cache cache = cacheManager.getCache(key);
        Cache.ValueWrapper valueWrapper = cache.get(token);
        if(valueWrapper == null) {
			throw new CustomException("Invalid Token", 
					ErrorMap.builder().put("error", "유효하지 않은 토큰입니다.").build());
        }
        Map<String, Object> tokenMap = (Map<String, Object>) valueWrapper.get();
		return tokenMap;
	}
	
	public void removeToken(String key, String token) {
		Cache cache = cacheManager.getCache(key);
		cache.evict(token);
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
		Cache cache = cacheManager.getCache("passwordResetToken");
		Map<String, Object> tokenMap = new HashMap<>();
		LocalDateTime expirationTime  = LocalDateTime.now().plus(Duration.ofMinutes(5));
		
		tokenMap.put("email", email);
		tokenMap.put("expirationTime", expirationTime);
		
		deleteDuplicatedEmailOnCache(cache, email);
		
		cache.put(token, tokenMap);
	}
	
	public void deleteDuplicatedEmailOnCache(Cache cache, String email) {
		Map<String, Object> nativeCache = (Map<String, Object>) cache.getNativeCache();
		
	    for (Map.Entry<String, Object> entry : nativeCache.entrySet()) {
	        Map<String, Object> tokenEntryMap = (Map<String, Object>) entry.getValue();
	        String entryEmail = (String) tokenEntryMap.get("email");
	        if (entryEmail.equals(email)) {
	        	cache.evict(entry.getKey());
	            break;
	        }
	    }
	}

}
