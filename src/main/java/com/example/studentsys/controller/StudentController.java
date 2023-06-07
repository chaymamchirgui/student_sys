package com.example.studentsys.controller;

import com.example.studentsys.model.Student;
import com.example.studentsys.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@RestController
@CrossOrigin
@RequestMapping("/student")
public class StudentController {
    @Autowired
    private StudentService studentService;

    @PostMapping("/add")
    public String add(@RequestBody Student student){
        studentService.saveStudent(student);
        return "new student is added";

    }
    @GetMapping("/getAll")
    public  List<Student> getAllStudents(){
        return studentService.getAllStudents();
    }

}
