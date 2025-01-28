package com.serial.platform.controllers;

import com.serial.platform.Services.UserServiceImpl;
import com.serial.platform.models.User;
import org.apache.coyote.Response;
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
    public ResponseEntity<List<User>> listAllUsers() {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(userServiceImpl.getAllUsers());
    }

    @PostMapping("/api/public/user")
    public ResponseEntity<String> createUser(@RequestBody User user) {
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(userServiceImpl.createUser(user));
    }

    @DeleteMapping("/api/admin/users/{user_id}")
    public ResponseEntity<String> deleteUser(@PathVariable Long user_id) {
        try {
            return ResponseEntity
                    .status(HttpStatus.OK)
                    .body(userServiceImpl.deleteUser(user_id));
        } catch (ResponseStatusException e) {
            return ResponseEntity
                    .status(e.getStatusCode())
                    .body(e.getReason());
        }
    }

}
