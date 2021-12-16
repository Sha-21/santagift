package com.example.santagift.backend.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.santagift.backend.models.Cadeau;


public interface CadeauRepository extends MongoRepository<Cadeau, String>{

}
