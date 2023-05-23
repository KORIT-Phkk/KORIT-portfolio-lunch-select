package com.korit.lunchSelect.repository;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.korit.lunchSelect.entity.Category;
@Mapper
public interface CategoryRepository {

	public List<Category> getCategory();
}
