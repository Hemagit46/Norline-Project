package com.project.repo;

import com.project.entity.Shirts;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ShirtsRepo extends JpaRepository<Shirts, Long> {
    
}
