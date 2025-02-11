USE pulse_point;

CREATE TABLE IF NOT EXISTS addresses (
    id BIGINT AUTO_INCREMENT,
    division VARCHAR(255) NOT NULL,
    district VARCHAR(255) NOT NULL,
    sub_district VARCHAR(255) NOT NULL,
    union_name VARCHAR(255) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS users (
    id BIGINT AUTO_INCREMENT,
    nid VARCHAR(255),
    password VARCHAR(100) NOT NULL,
    name VARCHAR(50) NOT NULL,
    dob DATE NOT NULL,
    phone VARCHAR(255) NOT NULL,
    email VARCHAR(255),
    address_id BIGINT UNIQUE,
    CONSTRAINT fk_user_address FOREIGN KEY (address_id) REFERENCES addresses(id) ON DELETE CASCADE,
    PRIMARY KEY(id)
);

-- CREATE TABLE roles (
--     id BIGINT AUTO_INCREMENT PRIMARY KEY,
--     role_name VARCHAR(50) NOT NULL
-- );

-- INSERT INTO roles (role_name)
-- VALUES
-- 	('admin'),
-- 	('doctor'),
-- 	('patient'),
-- 	('assistant');

-- CREATE TABLE credentials (
--     id BIGINT AUTO_INCREMENT PRIMARY KEY,
--     nid VARCHAR(17) UNIQUE NOT NULL,
--     password VARCHAR(255) NOT NULL
-- );



-- CREATE TABLE Doctor_Assistants (
--     doctor_id BIGINT,
--     assistant_id BIGINT,
--     FOREIGN KEY (doctor_id) REFERENCES Users(id),
--     FOREIGN KEY (assistant_id) REFERENCES Users(id),
--     PRIMARY KEY (doctor_id, assistant_id)
-- );