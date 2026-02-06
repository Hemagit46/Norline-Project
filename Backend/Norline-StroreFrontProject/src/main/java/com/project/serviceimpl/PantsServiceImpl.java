package com.project.serviceimpl;

import com.project.entity.Pants;
import com.project.repo.PantsRepo;
import com.project.service.PantsService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PantsServiceImpl implements PantsService {

    private final PantsRepo pantsRepo;

    public PantsServiceImpl(PantsRepo pantsRepo) {
        this.pantsRepo = pantsRepo;
    }

    @Override
    public Pants savePant(Pants pant) {
        return pantsRepo.save(pant);
    }

    @Override
    public List<Pants> getAllPants() {
        return pantsRepo.findAll();
    }

    @Override
    public Pants getPantById(Long id) {
        return pantsRepo.findById(id).orElse(null);
    }

    @Override
    public void deletePant(Long id) {
        pantsRepo.deleteById(id);
    }
}
