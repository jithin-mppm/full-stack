package com.example.reactmongo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.reactmongo.dao.StudentDao;
import com.example.reactmongo.model.Student;
import com.example.reactmongo.service.SequenceGeneratorService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class StudentController {

	@Autowired
	private StudentDao studentdao;
	
	@Autowired
	SequenceGeneratorService sequenceseneratorservice;
	
	@GetMapping("/student")
    public List<Student> getStudents() {
        return studentdao.findAll(Sort.by("studname").ascending());
    }
	
	@PostMapping("/student")
	public Student createStudent(@RequestBody Student student) {
		long id=sequenceseneratorservice.generateSequence(Student.SEQUENCE_NAME);
		student.setId("R00"+id);
		return studentdao.save(student);
	}
}
