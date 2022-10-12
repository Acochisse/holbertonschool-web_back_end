-- script creates a stored procedure that calculates the average score of a user
-- ComputeAverage takes one parameter: the user's id

DELIMITER $$
CREATE PROCEDURE ComputeAverage(IN user_id INT)
BEGIN
    SET @average = (SELECT AVG(score) FROM corrections WHERE corrections.user_id = user_id);

    UPDATE users
    SET average_score = @average
    WHERE id = user_id;
END$$

DELIMITER ;