package com.example.demo.model;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;

@Entity
public class Loan {
    @Id
    private Long id;

    /**
     * Sets the identifier.
     *
     * @param id New identifier.
     */
    public void setId(Long id) {
        this.id = id;
    }
    @SequenceGenerator(name = "loan_id")
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "loan_id")
    public Long getId() {
        return id;
    }
}
