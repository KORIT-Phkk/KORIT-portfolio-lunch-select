package com.korit.lunchSelect.security.oauth2;

import java.io.IOException;
import java.net.URLEncoder;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

import com.korit.lunchSelect.entity.User;
import com.korit.lunchSelect.repository.UserRepository;
import com.korit.lunchSelect.security.jwt.JwtTokenProvider;

import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class OAuth2SuccessHandler extends SimpleUrlAuthenticationSuccessHandler{

	private final UserRepository userRepository;
	private final JwtTokenProvider jwtTokenProvider;
	
	@Value("${config.front-end-url}")
	private String frontEndUrl;
	
	@Override
	public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
		
		OAuth2User oAuth2User = (OAuth2User) authentication.getPrincipal();
		String email = oAuth2User.getAttribute("email");
		String provider = oAuth2User.getAttribute("provider");
		User userEntity = userRepository.findUserByEmail(email);
		
		if(userEntity == null) {
			String registerToken = jwtTokenProvider.generateOAuth2RegisterToken(authentication);
			String name = oAuth2User.getAttribute("name");
			response.sendRedirect(frontEndUrl + "/auth/oauth2/register" 
															+ "?registerToken=" + registerToken 
															+ "&email="+ email
															+ "&name=" + URLEncoder.encode(name, "UTF-8")
															+ "&provider=" + provider);
		} else { 
			if(StringUtils.hasText(userEntity.getProvider())) {
				if(!userEntity.getProvider().contains(provider)) {
					response.sendRedirect(frontEndUrl + "/auth/oauth2/merge"
							+ "?provider=" + provider 
							+ "&email=" + email);
					return;
				}
				
				response.sendRedirect(frontEndUrl + "/auth/oauth2/login"
						+ "?accessToken=" + jwtTokenProvider.generateToken(authentication));
				
			} else {
				response.sendRedirect(frontEndUrl + "/auth/oauth2/merge"
															+ "?provider=" + provider 
															+ "&email=" + email);
			}
		}
		
	}
}
