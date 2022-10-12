-- scipt creates a stored procedure AddBonus that adds 
-- a bonus to a user's account
-- AddBonus takes two parameters: the user's id and project name

DELIMITER $$

CREATE PROCEDURE AddBonus (
    IN user_id INT,
    IN project_name VARCHAR(255),
    IN score INT)
BEGIN
    INSERT INTO projects (name)
    SELECT project_name WHERE NOT EXISTS
    (SELECT * FROM projects WHERE name = project_name);
    SET @proj_id = (SELECT id FROM projects WHERE name = project_name);
    INSERT INTO corrections (user_id, project_id, score) VALUES (user_id, @proj_id, score);

END $$
DELIMITER;