package com.personalProject.personalProject.repository;

import com.personalProject.personalProject.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

}
