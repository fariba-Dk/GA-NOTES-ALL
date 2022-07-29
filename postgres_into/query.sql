--- psql postgres -f query.sql
--- psql postgres -f <filename>

-- Drop a database
-- DROP DATABASE IF EXISTS ga;

-- Create a database
-- CREATE DATABASE ga;

--creating a course table
CREATE TABLE course
(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) --name column and its going to have maxx of 255 char
  code VARCHAR(5)
);

--SELECT * From course
INSERT INTO course (name, code)
VALUES ('software engineering')

--select all rows from course table
SELECT * FROM course;

