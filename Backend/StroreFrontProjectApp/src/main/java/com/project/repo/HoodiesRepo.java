package com.project.repo;

import com.project.entity.Hoodies;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HoodiesRepo extends JpaRepository<Hoodies, Long> {}
