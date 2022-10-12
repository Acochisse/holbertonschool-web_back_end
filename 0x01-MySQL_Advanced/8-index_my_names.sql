-- script that creates an index on the name column of the users table
-- only the first letter of the name is indexed


CREATE INDEX name_index ON names (name(1));
