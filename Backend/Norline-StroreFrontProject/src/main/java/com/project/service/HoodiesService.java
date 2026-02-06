package com.project.service;

import com.project.entity.Hoodies;
import java.util.List;

public interface HoodiesService {

    Hoodies saveHoodie(Hoodies hoodie);

    List<Hoodies> getAllHoodies();

    Hoodies getHoodieById(Long id);

    void deleteHoodie(Long id);
}
	