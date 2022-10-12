-- script that creates a table with the following attributes:
-- 1. id (int)
-- 2. email (varchar)
-- 3. name (varchar)

CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);