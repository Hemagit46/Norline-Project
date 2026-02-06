package com.project.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "hoodies")
public class Hoodies {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String name;
    private String size;
    private String color;
    private double price;
    private String brand;
    private String hoodType; 

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getSize() { return size; }
    public void setSize(String size) { this.size = size; }
    public String getColor() { return color; }
    public void setColor(String color) { this.color = color; }
    public double getPrice() { return price; }
    public void setPrice(double price) { this.price = price; }
    public String getBrand() { return brand; }
    public void setBrand(String brand) { this.brand = brand; }
    public String getHoodType() { return hoodType; }
    public void setHoodType(String hoodType) { this.hoodType = hoodType; }
}
