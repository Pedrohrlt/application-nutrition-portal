package com.example.demo.service;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/name")
public class LoanService {
    @GetMapping
    public ResponseEntity getName(){
        return ResponseEntity.ok("foi");
    }
}
