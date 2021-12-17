package com.example.santagift.backend.services.impl;

import java.time.LocalDate;

import com.example.santagift.backend.models.User;
import com.example.santagift.backend.repositories.UserRepository;
import com.example.santagift.backend.services.UserService;

public class UserServiceImpl extends GenericServiceImpl<User> implements UserService{
	
	private UserRepository repository;
	
	public UserServiceImpl(UserRepository repository) {
        super(repository);
	}
	
	@Override public User save(User entity) {
		entity.setDateCreation(LocalDate.now());
		return super.save(entity);
	}
}
