package com.project.repo;

import com.project.entity.Hoodies;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HoodiesRepo extends JpaRepository<Hoodies, Long> {

    List<Hoodies> findByBrand(String brand);

    List<Hoodies> findBySize(String size);

    List<Hoodies> findByColor(String color);

    List<Hoodies> findByPriceBetween(double minPrice, double maxPrice);
}
