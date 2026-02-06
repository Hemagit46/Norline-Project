package com.project.service;

import com.project.entity.Shirts;
import java.util.List;

public interface ShirtsService {

    Shirts saveShirt(Shirts shirt);

    List<Shirts> getAllShirts();

    Shirts getShirtById(Long id);

    void deleteShirt(Long id);
}
