-- script creates function SafeDiv
-- SafeDiv takes two parameters: a and b
-- SafeDiv returns a/b if b is not 0, otherwise it returns 0 if b==0

DELIMITER $$
CREATE FUNCTION SafeDiv(a INT, b INT)
RETURNS FLOAT DETERMINISTIC
BEGIN
    DECLARE result FLOAT;
    IF b = 0 THEN
        SET result = 0;
    ELSE
        SET result = a/b;
    END IF;
    RETURN result;
END$$


DELIMITER ;
