package com.project.service;

import com.project.entity.Suits;
import java.util.List;

public interface SuitsService {

    Suits saveSuit(Suits suit);

    List<Suits> getAllSuits();

    Suits getSuitById(Long id);

    void deleteSuit(Long id);
}
