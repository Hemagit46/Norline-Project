package com.project.service;

import com.project.entity.Pants;
import java.util.List;

public interface PantsService {

    Pants savePant(Pants pant);

    List<Pants> getAllPants();

    Pants getPantById(Long id);

    void deletePant(Long id);
}
