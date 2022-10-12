-- script creates new view need_meeting
-- need_meeting view contains all students who have a score under 80
-- last_meeting was over 1 month ago or never

CREATE VIEW need_meeting AS
    SELECT name
        FROM STUDENTS
        WHERE score < 80
        AND last_meeting IS NULL
        OR last_meeting < DATE_SUB(NOW(), INTERVAL 1 MONTH);