package com.personalProject.personalProject.controller;

import com.personalProject.personalProject.model.User;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = {"*"})
public class UserController {
    @PostMapping("")
    public ResponseEntity<?> saveUser(@RequestBody User user){

        return ResponseEntity.ok(200);
    }
}
