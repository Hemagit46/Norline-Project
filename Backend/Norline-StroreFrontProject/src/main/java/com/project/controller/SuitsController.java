package com.project.controller;

import com.project.entity.Suits;
import com.project.service.SuitsService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/suits")
@CrossOrigin(origins = "http://localhost:5173")
public class SuitsController {

    private final SuitsService suitsService;

    public SuitsController(SuitsService suitsService) {
        this.suitsService = suitsService;
    }

    @PostMapping
    public Suits addSuit(@RequestBody Suits suit) {
        return suitsService.saveSuit(suit);
    }

    @GetMapping
    public List<Suits> getAllSuits() {
        return suitsService.getAllSuits();
    }

    @GetMapping("/{id}")
    public Suits getSuitById(@PathVariable Long id) {
        return suitsService.getSuitById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteSuit(@PathVariable Long id) {
        suitsService.deleteSuit(id);
    }
}
