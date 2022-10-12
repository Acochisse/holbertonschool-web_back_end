-- creates a table with the following attributes:
-- 1. id (int)
-- 2. email (varchar)
-- 3. name (varchar)
-- 4. country, ennumeration of the countries US, CO, and TN

CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    country ENUM('US', 'CO', 'TN') NOT NULL,
    PRIMARY KEY (id)
);