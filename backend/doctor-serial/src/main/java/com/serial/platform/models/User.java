package com.serial.platform.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import java.time.LocalDate;

@Entity
@Table(name = "users")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
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

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(
            name = "address_id",
            referencedColumnName = "id",
            foreignKey = @ForeignKey(name = "fk_user_address")
    )
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Address address;

    public void setAddress(Address address) {
        this.address = address;
        if (address != null) {
            address.setUser(this);
        }
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", nid='" + nid + '\'' +
                ", password='" + password + '\'' +
                ", name='" + name + '\'' +
                ", dob=" + dob +
                ", bloodGroup='" + bloodGroup + '\'' +
                ", phone='" + phone + '\'' +
                ", email='" + email + '\'' +
                ", address=" + address +
                '}';
    }
}
