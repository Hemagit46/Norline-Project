package com.project.repo;

import com.project.entity.Suits;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SuitsRepo extends JpaRepository<Suits, Long> {

    List<Suits> findByBrand(String brand);

    List<Suits> findBySize(String size);

    List<Suits> findByColor(String color);

    List<Suits> findByPriceBetween(double minPrice, double maxPrice);
}
