package com.project.controller;

import com.project.entity.PoloTshirts;
import com.project.service.PoloTshirtsService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/polo-tshirts")
@CrossOrigin(origins = "http://localhost:5173")
public class PoloTshirtsController {

    private final PoloTshirtsService poloTshirtsService;

    public PoloTshirtsController(PoloTshirtsService poloTshirtsService) {
        this.poloTshirtsService = poloTshirtsService;
    }

    @PostMapping
    public PoloTshirts addPoloTshirt(@RequestBody PoloTshirts poloTshirt) {
        return poloTshirtsService.savePoloTshirt(poloTshirt);
    }

    @GetMapping
    public List<PoloTshirts> getAllPoloTshirts() {
        return poloTshirtsService.getAllPoloTshirts();
    }

    @GetMapping("/{id}")
    public PoloTshirts getPoloTshirtById(@PathVariable Long id) {
        return poloTshirtsService.getPoloTshirtById(id);
    }

    @DeleteMapping("/{id}")
    public void deletePoloTshirt(@PathVariable Long id) {
        poloTshirtsService.deletePoloTshirt(id);
    }
}
