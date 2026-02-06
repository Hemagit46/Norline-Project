package com.project;

import com.project.entity.Product;
import com.project.repo.ProductRepo;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements CommandLineRunner {

    private final ProductRepo repo;

    public DataLoader(ProductRepo repo) {
        this.repo = repo;
    }

    @Override
    public void run(String... args) {

        // ===== SHIRTS =====
        saveProduct("Black Cotton Shirt", "Shirts", 1999.0,
                "/images/shirts/shirts1.jpg",
                "/images/shirts/shirts2.jpg",
                "/images/shirts/shirts3.jpg");

        // ===== HOODIES =====
        saveProduct("Black Hoodie", "Hoodies", 2999.0,
                "/images/hoodies/hoodies1.jpg",
                "/images/hoodies/hoodies2.jpg",
                "/images/hoodies/hoodies3.jpg");

        // ===== PANTS =====
        saveProduct("Slim Fit Pants", "Pants", 2499.0,
                "/images/pants/pants1.jpg",
                "/images/pants/pants2.jpg",
                "/images/pants/pants3.jpg");

        // ===== WEDDING SUITS =====
        saveProduct("Royal Wedding Suit", "Wedding Suits", 28999.0,
                "/images/weddingsuits/weddingsuits1.jpg",
                "/images/weddingsuits/weddingsuits2.jpg",
                "/images/weddingsuits/weddingsuits3.jpg");

        // ===== POLO T-SHIRTS =====
        saveProduct("Classic Polo T-Shirt", "Polo T-Shirts", 1499.0,
                "/images/polotshirts/polotshirts1.jpg",
                "/images/polotshirts/polotshirts2.jpg",
                "/images/polotshirts/polotshirts3.jpg");
    }

    // ============================
    // Reusable Method
    // ============================
    private void saveProduct(String name, String category, Double price,
                             String img1, String img2, String img3) {

        Product p = new Product();
        p.setName(name);
        p.setCategory(category);
        p.setPrice(price);
        p.setImage(img1);
        p.setImage2(img2);
        p.setImage3(img3);

        repo.save(p);
    }
}
