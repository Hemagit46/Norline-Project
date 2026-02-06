package com.project.controller;

import com.project.entity.WeddingSuits;
import com.project.service.WeddingSuitsService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/wedding-suits")
@CrossOrigin(origins = "http://localhost:5173")
public class WeddingSuitsController {

    private final WeddingSuitsService weddingSuitsService;

    public WeddingSuitsController(WeddingSuitsService weddingSuitsService) {
        this.weddingSuitsService = weddingSuitsService;
    }

    @PostMapping
    public WeddingSuits addWeddingSuit(@RequestBody WeddingSuits weddingSuit) {
        return weddingSuitsService.saveWeddingSuit(weddingSuit);
    }

    @GetMapping
    public List<WeddingSuits> getAllWeddingSuits() {
        return weddingSuitsService.getAllWeddingSuits();
    }

    @GetMapping("/{id}")
    public WeddingSuits getWeddingSuitById(@PathVariable Long id) {
        return weddingSuitsService.getWeddingSuitById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteWeddingSuit(@PathVariable Long id) {
        weddingSuitsService.deleteWeddingSuit(id);
    }
}
