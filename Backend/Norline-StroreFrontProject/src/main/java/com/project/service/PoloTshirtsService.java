package com.project.service;

import com.project.entity.PoloTshirts;
import java.util.List;

public interface PoloTshirtsService {

    PoloTshirts savePoloTshirt(PoloTshirts poloTshirt);

    List<PoloTshirts> getAllPoloTshirts();

    PoloTshirts getPoloTshirtById(Long id);

    void deletePoloTshirt(Long id);
}
