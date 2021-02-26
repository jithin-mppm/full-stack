package com.example.reactmongo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "student")
public class Student {
	
	@Transient
    public static final String SEQUENCE_NAME = "users_sequence";
	
	@Id
	private String id;
	
	private String studname;
	private String dob;
	private String std;
	private String div;
	private String gender;

	public Student() {
		
	}

	public Student(String studname, String dob, String std, String div, String gender) {
		super();
		this.studname = studname;
		this.dob = dob;
		this.std = std;
		this.div = div;
		this.gender = gender;
	}
	

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getStudname() {
		return studname;
	}

	public void setStudname(String studname) {
		this.studname = studname;
	}

	public String getDob() {
		return dob;
	}

	public void setDob(String dob) {
		this.dob = dob;
	}

	public String getStd() {
		return std;
	}

	public void setStd(String std) {
		this.std = std;
	}

	public String getDiv() {
		return div;
	}

	public void setDiv(String div) {
		this.div = div;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}
	
}
