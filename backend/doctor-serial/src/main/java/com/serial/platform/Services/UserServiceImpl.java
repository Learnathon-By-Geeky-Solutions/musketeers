package com.serial.platform.Services;

import com.serial.platform.exceptions.APIException;
import com.serial.platform.exceptions.ResourceNotFoundException;
import com.serial.platform.models.Address;
import com.serial.platform.models.User;
import com.serial.platform.payloads.AddressDTO;
import com.serial.platform.payloads.UserDTO;
import com.serial.platform.payloads.UserResponse;
import com.serial.platform.repositories.UserRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ModelMapper modelMapper;

    public UserResponse getAllUsers(Integer pageNumber, Integer pageSize, String sortBy, String sortOrder) {
        Sort sortByAndOrder = sortOrder.equalsIgnoreCase("asc")
                ? Sort.by(sortBy).ascending()
                : Sort.by(sortBy).descending();
        Pageable pageDetails = PageRequest.of(pageNumber, pageSize, sortByAndOrder);
        Page<User> userPage = userRepository.findAll(pageDetails);
        List<User> users = userPage.getContent();
        if (users.isEmpty()) {
            throw new APIException("No User exists");
        }

        List<UserDTO> userDTOS = new ArrayList<>();
        for (User user: users) {
            UserDTO userDTO = modelMapper.map(user, UserDTO.class);
            userDTOS.add(userDTO);
        }

        UserResponse userResponse = new UserResponse();
        userResponse.setContent(userDTOS);
        userResponse.setPageNumber(userPage.getNumber());
        userResponse.setPageSize(userPage.getSize());
        userResponse.setTotalElements(userPage.getTotalElements());
        userResponse.setTotalPages(userPage.getTotalPages());
        userResponse.setLastPage(userPage.isLast());
        return userResponse;
    }

    public UserDTO createUser(UserDTO userDTO) {
        User user = modelMapper.map(userDTO, User.class);
        // Ensuring bidirectional relationship
        if (user.getAddress() != null) {
            user.getAddress().setUser(user);
        }

        Optional<User> existingUser = userRepository.findByNid(user.getNid());
        if (existingUser.isPresent()) {
            throw new APIException("User with nid: " + user.getNid() + " already exists");
        }
        User savedUser = userRepository.save(user);
        return modelMapper.map(savedUser, UserDTO.class);
    }

    @Override
    public UserDTO deleteUser(Long userId) {
        User deletedUser = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User", "userId", userId));

        userRepository.deleteById(userId);
        return modelMapper.map(deletedUser, UserDTO.class);
    }

    @Override
    public UserDTO updateUser(Long userId, UserDTO userDTO) {
        User existingUser = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User", "userId", userId));
        Address existingAddress = existingUser.getAddress();
        AddressDTO addressDTO = userDTO.getAddress();

        if (userDTO.getNid() != null) existingUser.setNid(userDTO.getNid());
        if (userDTO.getPassword() != null) existingUser.setPassword(userDTO.getPassword());
        if (userDTO.getName() != null) existingUser.setName(userDTO.getName());
        if (userDTO.getDob() != null) existingUser.setDob(userDTO.getDob());
        if (userDTO.getBloodGroup() != null) existingUser.setBloodGroup(userDTO.getBloodGroup());
        if (userDTO.getPhone() != null) existingUser.setPhone(userDTO.getPhone());
        if (userDTO.getEmail() != null) existingUser.setEmail(userDTO.getEmail());
        if (addressDTO != null) {
            if (existingAddress == null) {
                existingUser.setAddress(modelMapper.map(userDTO.getAddress(), Address.class));
            } else {
                if (addressDTO.getDivision() != null) existingAddress.setDivision(addressDTO.getDivision());
                if (addressDTO.getDistrict() != null) existingAddress.setDistrict(addressDTO.getDistrict());
                if (addressDTO.getSubDistrict() != null) existingAddress.setSubDistrict(addressDTO.getSubDistrict());
                if (addressDTO.getUnionName() != null) existingAddress.setUnionName(addressDTO.getUnionName());
            }
        }
        User updatedUser = userRepository.save(existingUser);
        return modelMapper.map(updatedUser, UserDTO.class);
    }
}
