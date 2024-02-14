package com.example.demo.model;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Pedrao {
    @Id
    private Long id;

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }
}
