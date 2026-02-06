package com.project.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "hoodies")
public class Hoodies {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String brand;
    private String size;
    private String color;
    private double price;
    private int stock;

    @Column(length = 500)
    private String description;

    private String imageUrl;

	public Hoodies() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Hoodies(Long id, String name, String brand, String size, String color, double price, int stock,
			String description, String imageUrl) {
		super();
		this.id = id;
		this.name = name;
		this.brand = brand;
		this.size = size;
		this.color = color;
		this.price = price;
		this.stock = stock;
		this.description = description;
		this.imageUrl = imageUrl;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getBrand() {
		return brand;
	}

	public void setBrand(String brand) {
		this.brand = brand;
	}

	public String getSize() {
		return size;
	}

	public void setSize(String size) {
		this.size = size;
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public int getStock() {
		return stock;
	}

	public void setStock(int stock) {
		this.stock = stock;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getImageUrl() {
		return imageUrl;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}

	@Override
	public String toString() {
		return "Hoodies [id=" + id + ", name=" + name + ", brand=" + brand + ", size=" + size + ", color=" + color
				+ ", price=" + price + ", stock=" + stock + ", description=" + description + ", imageUrl=" + imageUrl
				+ "]";
	}


    
}
