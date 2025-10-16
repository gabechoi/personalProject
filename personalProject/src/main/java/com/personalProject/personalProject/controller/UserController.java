package com.personalProject.personalProject.controller;

import com.personalProject.personalProject.model.User;
import com.personalProject.personalProject.repository.UserRepository;
import com.personalProject.personalProject.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/addUser")
    public ResponseEntity<?> saveUser(@RequestBody User user){
        try{
            User savedUser = userService.addUser(user);
            return ResponseEntity.ok(200);
        } catch (Exception e){
            return ResponseEntity.badRequest().body("Error saving user: " + e.getMessage());
        }
    }
}
