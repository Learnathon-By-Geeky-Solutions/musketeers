package com.serial.platform.payloads;

import com.serial.platform.models.Address;
import jakarta.persistence.CascadeType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO {
    private String nid;
    @Size(min = 4, max = 100, message = "Name must be between 2 and 50 characters")
    private String password;
    @NotBlank(message = "Please provide your full name")
    @Size(min = 2, max = 50, message = "Name must be between 2 and 50 characters")
    private String name;
    @NotNull(message = "Please provide your date-of-birth")
    private LocalDate dob;
    @NotBlank(message = "Please provide your blood group")
    private String bloodGroup;
    @NotBlank(message = "Please provide your active phone number")
    private String phone;
    private String email;
    private AddressDTO address;
}
