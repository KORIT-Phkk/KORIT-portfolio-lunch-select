package com.korit.lunchSelect.service;

import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.korit.lunchSelect.dto.LunchSelectReqDto;
import com.korit.lunchSelect.repository.LunchSelectRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class LunchSelectService {

	private final LunchSelectRepository lunchSelectRepository;

	public LunchSelectReqDto lunchSelect(LunchSelectReqDto lunchSelectReqDto) {
		Map<String, Object> map = new HashMap<>();

		
		
		return null;
	}
}

