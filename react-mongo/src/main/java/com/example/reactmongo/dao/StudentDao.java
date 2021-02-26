package com.example.reactmongo.dao;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.reactmongo.model.Student;

@Repository
public interface StudentDao extends MongoRepository<Student, String> {
	
}
