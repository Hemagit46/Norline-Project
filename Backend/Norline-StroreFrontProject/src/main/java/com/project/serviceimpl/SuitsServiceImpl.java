package com.project.serviceimpl;

import com.project.entity.Suits;
import com.project.repo.SuitsRepo;
import com.project.service.SuitsService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SuitsServiceImpl implements SuitsService {

    private final SuitsRepo suitsRepo;

    public SuitsServiceImpl(SuitsRepo suitsRepo) {
        this.suitsRepo = suitsRepo;
    }

    @Override
    public Suits saveSuit(Suits suit) {
        return suitsRepo.save(suit);
    }

    @Override
    public List<Suits> getAllSuits() {
        return suitsRepo.findAll();
    }

    @Override
    public Suits getSuitById(Long id) {
        return suitsRepo.findById(id).orElse(null);
    }

    @Override
    public void deleteSuit(Long id) {
        suitsRepo.deleteById(id);
    }
}
