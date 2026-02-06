package com.project.repo;

import com.project.entity.PoloTshirts;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PoloTshirtsRepo extends JpaRepository<PoloTshirts, Long> {

    List<PoloTshirts> findByBrand(String brand);

    List<PoloTshirts> findBySize(String size);

    List<PoloTshirts> findByColor(String color);

    List<PoloTshirts> findByPriceBetween(double minPrice, double maxPrice);
}
