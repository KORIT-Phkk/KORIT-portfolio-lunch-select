package com.korit.lunchSelect.security.jwt;

import java.security.Key;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

import com.korit.lunchSelect.dto.auth.JwtRespDto;
import com.korit.lunchSelect.exception.CustomException;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.UnsupportedJwtException;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Component
public class JwtTokenProvider {
	
	private final Key key;
	
	public JwtTokenProvider(@Value("${jwt.secret}") String secretKey) {
		key = Keys.hmacShaKeyFor(Decoders.BASE64.decode(secretKey));
	}
	
	public String generateToken(Authentication authentication) {
		String email = null;
		
		if(authentication.getPrincipal().getClass() == PrincipalUser.class) {
			// PrincipalUser
			PrincipalUser principalUser = (PrincipalUser) authentication.getPrincipal();
			email = principalUser.getEmail();
			
		}else {
			// OAuth2User
			OAuth2User oAuth2User = (OAuth2User) authentication.getPrincipal();
			email = oAuth2User.getAttribute("email");
		}
		
		if(authentication.getAuthorities() == null) {
			throw new RuntimeException("등록된 권한이 없습니다.");
		}
		
		StringBuilder builder = new StringBuilder();
		
		authentication.getAuthorities().forEach(authority -> {
			builder.append(authority.getAuthority() + ",");
		});
		builder.delete(builder.length() - 1, builder.length());
		
		String authorities = builder.toString();
		
		Date tokenExpiresDate = new Date(new Date().getTime() + (1000 * 60 * 60 * 24));	// 현재시간 + 하루
		
		return Jwts.builder()
				.setSubject(authentication.getName())		// 토큰의 제목(email)
				.claim("auth", authorities)					// auth
				.setExpiration(tokenExpiresDate)			// 토큰 만료 시간
				.signWith(key, SignatureAlgorithm.HS256)	// 토큰 암호화
				.compact();
	}
	
	public String generateOAuth2RegisterToken(Authentication authentication) {
		
		Date tokenExpireDate = new Date(new Date().getTime() + (1000 * 60 * 10));
		OAuth2User oAuth2User = (OAuth2User)authentication.getPrincipal();
		String email = oAuth2User.getAttribute("email");
				
		return Jwts.builder()
				.setSubject("OAuth2Register")
				.claim("email", email)
				.setExpiration(tokenExpireDate)
				.signWith(key, SignatureAlgorithm.HS256)
				.compact();
	}
	
	public boolean validateToken(String token) {
		try {
			Jwts.parserBuilder()
				.setSigningKey(key)
				.build()
				.parseClaimsJws(token);
			
			return true;
			
		} catch (SecurityException | MalformedJwtException e) {
//			log.info("Invaild JWT Token", e);
		} catch (ExpiredJwtException e) {
			log.info("Expired JWT Token", e);
		} catch (UnsupportedJwtException e) {
			log.info("Unsupported JWT Token", e);
		} catch (IllegalArgumentException e) {
//			log.info("IllegalArgument JWT Token", e);
		} catch (Exception e) {
			log.info("JWT Token Error", e);
		}
		
		return false;
	}
	
	public String getToken(String token) {
		String type = "Bearer";
		
		if(StringUtils.hasText(token) && token.startsWith(type)) {
			return token.substring(type.length() + 1);
		}
		
		return null;
	}
	
	public Claims getClaims(String token) {
		return Jwts.parserBuilder()
				.setSigningKey(key)
				.build()
				.parseClaimsJws(token)
				.getBody();
	}
	
	public Authentication getAuthentication(String accessToken) {
		Authentication authentication = null;
		List<SimpleGrantedAuthority> authorities = new ArrayList<>();
		
		Claims claims = getClaims(accessToken);
		if(claims.get("auth") == null) {
			throw new CustomException("AccessToken에 권한 정보가 없습니다.");
		}
		
		String auth = claims.get("auth").toString();
		for(String role : auth.split(",")) {
			authorities.add(new SimpleGrantedAuthority(role));
		}
		
		
		UserDetails userDetails = new User(claims.getSubject(), "", authorities);
		
		authentication = new UsernamePasswordAuthenticationToken(userDetails, null, authorities);
		
		return authentication;
	}
	
}












