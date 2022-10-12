-- creates a table with the following attributes if it doesnt exist:
-- 1. id (int)
-- 2. email (varchar, uniq)
-- 3. name (string)
-- 4. country, ennumeration of the countries US, CO, and TN

CREATE TABLE IF NOT EXISTS users (
    id INT NOT NULL AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL UNIQUE,
    name VARCHAR(255) NOT NULL,
    country ENUM('US', 'CO', 'TN') NOT NULL,
    PRIMARY KEY (id)
);