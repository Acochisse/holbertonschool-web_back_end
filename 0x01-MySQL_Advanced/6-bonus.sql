-- scipt creates a stored procedure AddBonus that adds 
-- a bonus to a user's account
-- AddBonus takes two parameters: the user's id and project name

CREATE PROCEDURE AddBonus (IN user_id INT, IN project_name VARCHAR(255))
BEGIN
DECLARE project_id INT;
DECLARE bonus INT;
DECLARE user_bonus INT;
DECLARE user_total INT;
SELECT id INTO project_id FROM projects WHERE name = project_name;
SELECT bonus INTO bonus FROM projects WHERE name = project_name;
SELECT bonus INTO user_bonus FROM users WHERE id = user_id;
SELECT total INTO user_total FROM users WHERE id = user_id;
SET user_bonus = user_bonus + bonus;
SET user_total = user_total + bonus;
UPDATE users SET bonus = user_bonus, total = user_total WHERE id = user_id;
INSERT INTO transactions (user_id, project_id, amount) VALUES (user_id, project_id, bonus);
END;
