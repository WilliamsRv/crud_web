
create database crud_db;

use crud_db;


CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    firstname VARCHAR(255),
    email VARCHAR(255)
);



select*from users;