package com.serial.platform.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "addresses")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Address {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotBlank(message = "Please provide your division")
    private String division;
    @NotBlank(message = "Please provide your district")
    private String district;
    @NotBlank(message = "Please provide your sub-district")
    private String subDistrict;
    @NotBlank(message = "Please provide your union")
    private String unionName;

    @OneToOne(mappedBy = "address")
    @JsonIgnore
    private User user;

    public void setUser(User user) {
        this.user = user;
        if (user != null && user.getAddress() != this) {
            user.setAddress(this);
        }
    }

    @Override
    public String toString() {
        return "Address{" +
                "id=" + id +
                ", division='" + division + '\'' +
                ", district='" + district + '\'' +
                ", subDistrict='" + subDistrict + '\'' +
                ", unionName='" + unionName + '\'' +
                ", user=" + user.getId() +
                '}';
    }
}
