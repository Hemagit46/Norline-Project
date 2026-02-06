package com.project.controller;

import com.project.entity.Hoodies;
import com.project.service.HoodiesService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/hoodies")
@CrossOrigin(origins = "http://localhost:5173")
public class HoodiesController {

    private final HoodiesService hoodiesService;

    public HoodiesController(HoodiesService hoodiesService) {
        this.hoodiesService = hoodiesService;
    }

    @PostMapping
    public Hoodies addHoodie(@RequestBody Hoodies hoodie) {
        return hoodiesService.saveHoodie(hoodie);
    }

    @GetMapping
    public List<Hoodies> getAllHoodies() {
        return hoodiesService.getAllHoodies();
    }

    @GetMapping("/{id}")
    public Hoodies getHoodieById(@PathVariable Long id) {
        return hoodiesService.getHoodieById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteHoodie(@PathVariable Long id) {
        hoodiesService.deleteHoodie(id);
    }
}
