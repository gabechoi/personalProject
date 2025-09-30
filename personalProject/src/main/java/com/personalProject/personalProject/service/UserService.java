package com.personalProject.personalProject.service;

import com.personalProject.personalProject.model.User;
import com.personalProject.personalProject.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User addUser(User u) { return userRepository.save(u); }
}
