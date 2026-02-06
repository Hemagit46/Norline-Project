package com.project.service;

import com.project.entity.WeddingSuits;
import java.util.List;

public interface WeddingSuitsService {

    WeddingSuits saveWeddingSuit(WeddingSuits weddingSuit);

    List<WeddingSuits> getAllWeddingSuits();

    WeddingSuits getWeddingSuitById(Long id);

    void deleteWeddingSuit(Long id);
}
