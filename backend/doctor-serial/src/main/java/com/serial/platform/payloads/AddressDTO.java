package com.serial.platform.payloads;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.serial.platform.models.User;
import jakarta.persistence.OneToOne;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AddressDTO {
    @NotBlank(message = "Please provide your division")
    private String division;
    @NotBlank(message = "Please provide your district")
    private String district;
    @NotBlank(message = "Please provide your sub-district")
    private String subDistrict;
    @NotBlank(message = "Please provide your union")
    private String unionName;
}
