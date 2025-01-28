package com.serial.platform.Services;

import com.serial.platform.models.User;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    private final List<User> users = new ArrayList<>();
    private Long id = 1L;

    public List<User> getAllUsers() {
        return users;
    }

    public String createUser(User user) {
        user.setId(id++);
        users.add(user);
        return "User created successfully";
    }

    @Override
    public String deleteUser(Long user_id) {
        User deletedUser = users.stream()
                .filter(user -> user.getId().equals(user_id))
                .findFirst()
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Resource not found"));
        users.remove(deletedUser);
        return "Users with id: " + user_id + " deleted successfully";
    }
}
