package com.project.controller;

import com.project.entity.Shirts;
import com.project.service.ShirtsService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/shirts")
@CrossOrigin(origins = "http://localhost:5173")
public class ShirtsController {

    private final ShirtsService shirtsService;

    public ShirtsController(ShirtsService shirtsService) {
        this.shirtsService = shirtsService;
    }

    @PostMapping
    public Shirts addShirt(@RequestBody Shirts shirt) {
        return shirtsService.saveShirt(shirt);
    }

    @GetMapping
    public List<Shirts> getAllShirts() {
        return shirtsService.getAllShirts();
    }

    @GetMapping("/{id}")
    public Shirts getShirt(@PathVariable Long id) {
        return shirtsService.getShirtById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteShirt(@PathVariable Long id) {
        shirtsService.deleteShirt(id);
    }
}
