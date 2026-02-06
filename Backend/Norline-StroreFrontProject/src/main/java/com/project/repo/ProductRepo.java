package com.project.repo;

import com.project.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ProductRepo extends JpaRepository<Product, Long> {

    // Find products by category (case-insensitive)
    List<Product> findByCategoryIgnoreCase(String category);
}
