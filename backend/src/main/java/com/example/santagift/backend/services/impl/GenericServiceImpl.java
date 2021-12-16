package com.example.santagift.backend.services.impl;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.santagift.backend.services.GenericService;

public class GenericServiceImpl<T> implements GenericService<T>{

    private MongoRepository<T, String> repository;

    public GenericServiceImpl(MongoRepository<T, String> repository) {
        this.repository = repository;
    }

    @Override
    public List<T> findAll() {
        return this.repository.findAll();
    }

    @Override
    public T findById(String id) {
        return this.repository.findById(id).get();
    }

    @Override
    public T save(T entity) {
        return this.repository.save(entity);
    }

    @Override
    public T update(String id, T entity) {
        return this.repository.save(entity);
    }

    @Override
    public void delete(String id) {
        this.repository.deleteById(id);
    }
    
}
