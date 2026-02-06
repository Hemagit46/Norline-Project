package com.project.serviceimpl;

import com.project.entity.PoloTshirts;
import com.project.repo.PoloTshirtsRepo;
import com.project.service.PoloTshirtsService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PoloTshirtsServiceImpl implements PoloTshirtsService {

    private final PoloTshirtsRepo poloTshirtsRepo;

    public PoloTshirtsServiceImpl(PoloTshirtsRepo poloTshirtsRepo) {
        this.poloTshirtsRepo = poloTshirtsRepo;
    }

    @Override
    public PoloTshirts savePoloTshirt(PoloTshirts poloTshirt) {
        return poloTshirtsRepo.save(poloTshirt);
    }

    @Override
    public List<PoloTshirts> getAllPoloTshirts() {
        return poloTshirtsRepo.findAll();
    }

    @Override
    public PoloTshirts getPoloTshirtById(Long id) {
        return poloTshirtsRepo.findById(id).orElse(null);
    }

    @Override
    public void deletePoloTshirt(Long id) {
        poloTshirtsRepo.deleteById(id);
    }
}
