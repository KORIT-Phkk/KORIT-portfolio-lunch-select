package com.korit.lunchSelect.service;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.korit.lunchSelect.entity.Category;
import com.korit.lunchSelect.repository.CategoryRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CategoryService {

	
	private final CategoryRepository categoryRepository;
	
	public List<Category> getCategory(){
		
		
		
		return categoryRepository.getCategory();
	}
	
	
}
