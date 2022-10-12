-- script that creates a table if it doesnt exist with the following attributes:
-- 1. id (int)
-- 2. email uniq (varchar)
-- 3. name (string)

CREATE TABLE IF NOT EXISTS users (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    name VARCHAR(255),
);