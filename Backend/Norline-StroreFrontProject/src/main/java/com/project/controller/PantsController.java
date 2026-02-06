package com.project.controller;

import com.project.entity.Pants;
import com.project.service.PantsService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/pants")
@CrossOrigin(origins = "http://localhost:5173")
public class PantsController {

    private final PantsService pantsService;

    public PantsController(PantsService pantsService) {
        this.pantsService = pantsService;
    }

    @PostMapping
    public Pants addPant(@RequestBody Pants pant) {
        return pantsService.savePant(pant);
    }

    @GetMapping
    public List<Pants> getAllPants() {
        return pantsService.getAllPants();
    }

    @GetMapping("/{id}")
    public Pants getPantById(@PathVariable Long id) {
        return pantsService.getPantById(id);
    }

    @DeleteMapping("/{id}")
    public void deletePant(@PathVariable Long id) {
        pantsService.deletePant(id);
    }
}
