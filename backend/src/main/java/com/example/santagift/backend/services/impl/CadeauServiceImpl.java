package com.example.santagift.backend.services.impl;

import java.time.LocalDate;

import com.example.santagift.backend.models.Cadeau;
import com.example.santagift.backend.repositories.CadeauRepository;
import com.example.santagift.backend.services.CadeauService;

public class CadeauServiceImpl extends GenericServiceImpl<Cadeau> implements CadeauService{

	private CadeauRepository repository;
	
	public CadeauServiceImpl(CadeauRepository repository) {
        super(repository);
	}
	
	@Override public Cadeau save(Cadeau entity) {
		entity.setDateCreation(LocalDate.now());
		return super.save(entity);
	}
}
