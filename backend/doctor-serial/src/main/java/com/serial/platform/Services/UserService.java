package com.serial.platform.Services;

import com.serial.platform.payloads.UserDTO;
import com.serial.platform.payloads.UserResponse;

public interface UserService {
    UserResponse getAllUsers(Integer pageNumber, Integer pageSize, String sortBy, String sortOrder);
    UserDTO createUser(UserDTO userDTO);
    UserDTO deleteUser(Long user_id);
    UserDTO updateUser(Long userId, UserDTO userDTO);
}
