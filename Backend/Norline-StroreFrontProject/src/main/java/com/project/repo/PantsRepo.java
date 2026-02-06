package com.project.repo;

import com.project.entity.Pants;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PantsRepo extends JpaRepository<Pants, Long> {

    List<Pants> findByBrand(String brand);

    List<Pants> findBySize(String size);

    List<Pants> findByColor(String color);

    List<Pants> findByPriceBetween(double minPrice, double maxPrice);
}
