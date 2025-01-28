package com.serial.platform.Services;

import com.serial.platform.models.User;
import com.serial.platform.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public String createUser(User user) {
        userRepository.save(user);
        return "User created successfully";
    }

    @Override
    public User deleteUser(Long userId) {
        User deletedUser = userRepository.findById(userId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Resource not found"));

        userRepository.deleteById(userId);
        return deletedUser;
    }

    @Override
    public User updateUser(Long userId, User user) {
        User existingUser = userRepository.findById(userId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Resource not found"));

        user.setId(userId);
        return userRepository.save(user);
    }
}
