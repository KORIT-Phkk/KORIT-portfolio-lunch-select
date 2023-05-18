package com.korit.lunchSelect.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.korit.lunchSelect.service.CategoryService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class CategoryController {

	
	private final CategoryService categoryService;
	
	@GetMapping("/lunchselect/category")
	public ResponseEntity<?> getCategory() {
		
		
		return ResponseEntity.ok(categoryService.getCategory());
	}
	
}
