package com.project.repo;

import com.project.entity.WeddingSuits;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface WeddingSuitsRepo extends JpaRepository<WeddingSuits, Long> {

    List<WeddingSuits> findByBrand(String brand);

    List<WeddingSuits> findBySize(String size);

    List<WeddingSuits> findByColor(String color);

    List<WeddingSuits> findByPriceBetween(double minPrice, double maxPrice);
}
