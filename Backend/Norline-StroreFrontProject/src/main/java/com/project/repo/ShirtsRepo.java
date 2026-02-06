package com.project.repo;

import com.project.entity.Shirts;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ShirtsRepo extends JpaRepository<Shirts, Long> {

    
	List<Shirts> findByBrand(String brand);

    List<Shirts> findBySize(String size);

    List<Shirts> findByColor(String color);

    List<Shirts> findByPriceBetween(double minPrice, double maxPrice);
}
