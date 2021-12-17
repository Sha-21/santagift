package com.example.santagift.backend.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.santagift.backend.models.User;
import com.example.santagift.backend.services.impl.UserServiceImpl;


@RestController
@RequestMapping("users")
@CrossOrigin
public class UserController {

	@Autowired
    private UserServiceImpl service;

    @GetMapping("")
    public List<User> findAll() {
        return this.service.findAll();
    }

    @GetMapping("{id}")
    public User findById(@PathVariable String id) {
        return this.service.findById(id);
    }

    @PostMapping("")
    public User save(@RequestBody User User) {
        return this.service.save(User);
    }
    
    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void delete(@PathVariable String id) {
        service.delete(id);
    }
}
