package com.example.studentsys.service;


import com.example.studentsys.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.studentsys.model.Student;
import java.util.List;
@Service
public class StudentServiceImpl  implements  StudentService{
    @Autowired
    StudentRepository studentRepository;
    @Override
    public Student saveStudent(Student student) {
        return studentRepository.save(student);
    }

    @Override
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }
}
