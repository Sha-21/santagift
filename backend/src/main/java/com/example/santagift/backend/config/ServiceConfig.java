package com.example.santagift.backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.example.santagift.backend.repositories.CadeauRepository;
import com.example.santagift.backend.services.impl.CadeauServiceImpl;

@Configuration
public class ServiceConfig {

    @Bean
    public CadeauServiceImpl cadeauServiceFactory(CadeauRepository repository) {
        return new CadeauServiceImpl(repository);
    }
}