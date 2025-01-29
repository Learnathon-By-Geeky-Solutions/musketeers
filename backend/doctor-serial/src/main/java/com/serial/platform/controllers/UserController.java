package com.serial.platform.controllers;

import com.serial.platform.Services.UserServiceImpl;
import com.serial.platform.config.AppConstants;
import com.serial.platform.models.User;
import com.serial.platform.payloads.UserDTO;
import com.serial.platform.payloads.UserResponse;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {
    @Autowired
    private UserServiceImpl userServiceImpl;

    @GetMapping("/api/admin/users")
    public ResponseEntity<UserResponse> getAllUsers(
            @RequestParam(name = "pageNumber", defaultValue = AppConstants.PAGE_NUMBER, required = false) Integer pageNumber,
            @RequestParam(name = "pageSize", defaultValue = AppConstants.PAGE_SIZE, required = false) Integer pageSize,
            @RequestParam(name = "sortBy", defaultValue = AppConstants.SORT_USERS_BY, required = false) String sortBy,
            @RequestParam(name = "sortOrder", defaultValue = AppConstants.SORT_ORDER, required = false) String sortOrder
            ) {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(userServiceImpl.getAllUsers(pageNumber, pageSize, sortBy, sortOrder));
    }

    @PostMapping("/api/public/user")
    public ResponseEntity<UserDTO> createUser(@Valid @RequestBody UserDTO userDTO) {
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(userServiceImpl.createUser(userDTO));
    }

    @DeleteMapping("/api/admin/users/{userId}")
    public ResponseEntity<UserDTO> deleteUser(@PathVariable Long userId) {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(userServiceImpl.deleteUser(userId));
    }

    @PutMapping("/api/admin/users/{userId}")
    public ResponseEntity<UserDTO> updateUser(@PathVariable Long userId, @Valid @RequestBody UserDTO userDTO) {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(userServiceImpl.updateUser(userId, userDTO));
    }
}
