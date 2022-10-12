-- script that creates an index idx_name_first_score 
-- on the name and score columns of the scores table
-- import table dump names.sql.zip
-- only the first letter of name and score must be index

CREATE INDEX idx_name_first_score ON (names(1), score);