package com.korit.lunchSelect.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.korit.lunchSelect.security.jwt.JwtAuthenticationEntryPoint;
import com.korit.lunchSelect.security.jwt.JwtAuthenticationFilter;
import com.korit.lunchSelect.security.jwt.JwtTokenProvider;
import com.korit.lunchSelect.security.oauth2.OAuth2SuccessHandler;
import com.korit.lunchSelect.service.OAuthService;

import lombok.RequiredArgsConstructor;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig extends WebSecurityConfigurerAdapter {
	
	private final JwtTokenProvider jwtTokenProvider;
	private final JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint;
	private final OAuthService oAuthService;
	private final OAuth2SuccessHandler oAuth2SuccessHandler;
	
	@Value("${config.front-end-url}")
	private String frontEndUrl;

	@Bean
	public BCryptPasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.cors();
		http.csrf().disable();
		http.httpBasic().disable();
		http.formLogin().disable();
		http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
		
		http.authorizeRequests()
			    .antMatchers("/auth/**", "/lunchselect/category/**", "/lunchselect/room/getflag/**", "/lunchselect/room/check/**", "/lunchselect/room/category/insert/**", "/image/**")
			    .permitAll()
			    .anyRequest()
			    .authenticated()
			    .and()
			    .addFilterBefore(new JwtAuthenticationFilter(jwtTokenProvider), UsernamePasswordAuthenticationFilter.class)
			    .exceptionHandling()
			    .authenticationEntryPoint(jwtAuthenticationEntryPoint)
			    .and()
			    .oauth2Login()
			    .loginPage(frontEndUrl+ "/auth/login")
			    .successHandler(oAuth2SuccessHandler)
			    .userInfoEndpoint()
			    .userService(oAuthService);

		
	}
}








