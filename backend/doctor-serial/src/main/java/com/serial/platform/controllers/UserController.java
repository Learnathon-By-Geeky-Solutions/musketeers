package com.serial.platform.controllers;

import com.serial.platform.Services.UserServiceImpl;
import com.serial.platform.models.User;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
public class UserController {
    @Autowired
    private UserServiceImpl userServiceImpl;

    @GetMapping("/api/admin/users")
    public ResponseEntity<List<User>> getAllUsers() {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(userServiceImpl.getAllUsers());
    }

    @PostMapping("/api/public/user")
    public ResponseEntity<String> createUser(@Valid @RequestBody User user) {
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(userServiceImpl.createUser(user));
    }

    @DeleteMapping("/api/admin/users/{userId}")
    public ResponseEntity<String> deleteUser(@PathVariable Long userId) {
        try {
            User user = userServiceImpl.deleteUser(userId);
            return ResponseEntity
                    .status(HttpStatus.OK)
                    .body("User deleted successfully");
        } catch (ResponseStatusException e) {
            return ResponseEntity
                    .status(e.getStatusCode())
                    .body(e.getReason());
        }
    }

    @PutMapping("/api/admin/users/{userId}")
    public ResponseEntity<String> updateUser(@PathVariable Long userId, @Valid @RequestBody User user) {
        try {
            User updatedUser = userServiceImpl.updateUser(userId, user);
            return ResponseEntity
                    .status(HttpStatus.OK)
                    .body("User updated successfully");
        } catch (ResponseStatusException e) {
            return ResponseEntity
                    .status(e.getStatusCode())
                    .body(e.getReason());
        }
    }
}
