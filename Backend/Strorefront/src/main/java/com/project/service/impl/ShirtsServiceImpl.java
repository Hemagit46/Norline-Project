package com.project.service.impl;

import com.project.entity.Shirts;
import com.project.repo.ShirtsRepo;
import com.project.service.ShirtsService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ShirtsServiceImpl implements ShirtsService {

    private final ShirtsRepo shirtsRepo;

    public ShirtsServiceImpl(ShirtsRepo shirtsRepository) {
        this.shirtsRepo = shirtsRepository;
    }

    @Override
    public Shirts saveShirt(Shirts shirt) {
        return shirtsRepo.save(shirt);
    }

    @Override
    public List<Shirts> getAllShirts() {
        return shirtsRepo.findAll();
    }

    @Override
    public Shirts getShirtById(Long id) {
        return shirtsRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Shirt not found"));
    }

    @Override
    public void deleteShirt(Long id) {
        shirtsRepo.deleteById(id);
    }
}
