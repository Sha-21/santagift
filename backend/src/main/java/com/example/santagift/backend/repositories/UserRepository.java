package com.example.santagift.backend.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.santagift.backend.models.User;

public interface UserRepository extends MongoRepository<User, String>{
}
