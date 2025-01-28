package com.serial.platform.Services;

import com.serial.platform.models.User;

import java.util.List;

public interface UserService {
    List<User> getAllUsers();
    String createUser(User user);
    String deleteUser(Long user_id);
}
