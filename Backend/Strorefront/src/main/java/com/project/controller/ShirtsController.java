package com.project.controller;

import com.project.entity.Shirts;
import com.project.service.ShirtsService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/shirts")
@CrossOrigin(origins = "http://localhost:5173") 
public class ShirtsController {

    private final ShirtsService shirtsService;

    public ShirtsController(ShirtsService shirtsService) {
        this.shirtsService = shirtsService;
    }

    // 🔹 ADD SHIRT
    @PostMapping
    public Shirts addShirt(@RequestBody Shirts shirt) {
        return shirtsService.saveShirt(shirt);
    }

    // 🔹 GET ALL SHIRTS
    @GetMapping
    public List<Shirts> getAllShirts() {
        return shirtsService.getAllShirts();
    }

    // 🔹 GET SHIRT BY ID (Product Details Page)
    @GetMapping("/{id}")
    public Shirts getShirtById(@PathVariable Long id) {
        return shirtsService.getShirtById(id);
    }

    // 🔹 DELETE SHIRT
    @DeleteMapping("/{id}")
    public void deleteShirt(@PathVariable Long id) {
        shirtsService.deleteShirt(id);
    }
}
