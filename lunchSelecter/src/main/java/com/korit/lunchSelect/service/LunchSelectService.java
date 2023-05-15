package com.korit.lunchSelect.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.korit.lunchSelect.dto.LunchSelectReqDto;
import com.korit.lunchSelect.repository.LunchSelectRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class LunchSelectService {

	private final LunchSelectRepository lunchSelectRepository;

	public List<String> lunchSelect(LunchSelectReqDto lunchSelectReqDto) {
		Map<String, Object> map = new HashMap<>();
		map.put("lat", lunchSelectReqDto.getLat());
		map.put("lng", lunchSelectReqDto.getLng());

		System.out.println("DTO: " + lunchSelectReqDto);
		System.out.println("DB: " + lunchSelectRepository.findByLocation(map));
		return lunchSelectRepository.findByLocation(map);
	}
}

