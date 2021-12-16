package com.example.santagift.backend.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.santagift.backend.models.Cadeau;
import com.example.santagift.backend.services.impl.CadeauServiceImpl;
import org.springframework.http.HttpStatus;

@RestController
@RequestMapping("cadeaux")
@CrossOrigin
public class CadeauController {

    @Autowired
    private CadeauServiceImpl service;

    @GetMapping("")
    public List<Cadeau> findAll() {
        return this.service.findAll();
    }

    @GetMapping("{id}")
    public Cadeau findById(@PathVariable String id) {
        return this.service.findById(id);
    }

    @PostMapping("")
    public Cadeau save(@RequestBody Cadeau cadeau) {
        return this.service.save(cadeau);
    }
    
    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void delete(@PathVariable String id) {
        service.delete(id);
    }
}
