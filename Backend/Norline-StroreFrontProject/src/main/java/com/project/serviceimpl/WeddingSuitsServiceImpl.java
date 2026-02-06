package com.project.serviceimpl;

import com.project.entity.WeddingSuits;
import com.project.repo.WeddingSuitsRepo;
import com.project.service.WeddingSuitsService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WeddingSuitsServiceImpl implements WeddingSuitsService {

    private final WeddingSuitsRepo weddingSuitsRepo;

    public WeddingSuitsServiceImpl(WeddingSuitsRepo weddingSuitsRepo) {
        this.weddingSuitsRepo = weddingSuitsRepo;
    }

    @Override
    public WeddingSuits saveWeddingSuit(WeddingSuits weddingSuit) {
        return weddingSuitsRepo.save(weddingSuit);
    }

    @Override
    public List<WeddingSuits> getAllWeddingSuits() {
        return weddingSuitsRepo.findAll();
    }

    @Override
    public WeddingSuits getWeddingSuitById(Long id) {
        return weddingSuitsRepo.findById(id).orElse(null);
    }

    @Override
    public void deleteWeddingSuit(Long id) {
        weddingSuitsRepo.deleteById(id);
    }
}
