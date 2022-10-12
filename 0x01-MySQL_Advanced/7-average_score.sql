-- script creates a stored procedure that calculates the average score of a user
-- ComputeAverage takes one parameter: the user's id

CREATE PROCEDURE ComputeAverage (IN user_id INT)
BEGIN
DECLARE user_average FLOAT;
SELECT AVG(score) INTO user_average FROM scores WHERE user_id = user_id;
UPDATE users SET average = user_average WHERE id = user_id;
END;