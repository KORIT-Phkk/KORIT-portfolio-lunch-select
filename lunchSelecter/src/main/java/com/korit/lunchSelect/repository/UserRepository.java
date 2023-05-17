package com.korit.lunchSelect.repository;

import org.apache.ibatis.annotations.Mapper;

import com.korit.lunchSelect.entity.Authority;
import com.korit.lunchSelect.entity.User;

@Mapper
public interface UserRepository {
	public User findUserByEmail(String email);
	public int saveUser(User user);
	public int saveAuthority(Authority authority);
	public int updateProvider(User user);
}
