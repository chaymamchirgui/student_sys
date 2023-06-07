package com.example.studentsys.repository;

import com.example.studentsys.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface StudentRepository  extends JpaRepository<Student,Integer> {

}
