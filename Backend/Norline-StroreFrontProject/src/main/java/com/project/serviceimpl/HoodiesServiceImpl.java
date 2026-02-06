package com.project.serviceimpl;

import com.project.entity.Hoodies;
import com.project.repo.HoodiesRepo;
import com.project.service.HoodiesService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HoodiesServiceImpl implements HoodiesService {

    private final HoodiesRepo hoodiesRepo;

    public HoodiesServiceImpl(HoodiesRepo hoodiesRepo) {
        this.hoodiesRepo = hoodiesRepo;
    }

    @Override
    public Hoodies saveHoodie(Hoodies hoodie) {
        return hoodiesRepo.save(hoodie);
    }

    @Override
    public List<Hoodies> getAllHoodies() {
        return hoodiesRepo.findAll();
    }

    @Override
    public Hoodies getHoodieById(Long id) {
        return hoodiesRepo.findById(id).orElse(null);
    }

    @Override
    public void deleteHoodie(Long id) {
        hoodiesRepo.deleteById(id);
    }
}
