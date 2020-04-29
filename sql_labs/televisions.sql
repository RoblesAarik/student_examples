-- Open up psql and create a sql_lab database if you haven't already done so. 
-- If you already have a sql_lab database, no need to create it again.

-- Write SQL commands under the prompts below, and run the file to get results.

-- In case there is already a televisions table, drop it
 DROP TABLE televisions;

-- Create a televisions table
CREATE TABLE televisions

--  The table should have id, model_name, screen_size, resolution,
--  price, release_date, photo_url
(id serial, model_name varchar(20), screen_size int, resolution int, price int, release_date timestamp, photo_url text);
\d televisions;
-- Insert 4 televisions into the tv_models table
INSERT INTO 
televisions
(model_name)
VALUES
('SMASUNG'),
('LG'),
('SONY'),
('PANASONIC');


-- Select all entries from the tv_models table
SELECT * FROM televisions;

-- HUNGRY FOR MORE? 
-- Look at this afternoon's instructor notes and read on altering tables before attempting below

-- Alter the tv_models, removing the resolution column
--  and add vertical_resolution and horizontal_resolution columns
ALTER TABLE televisions DROP COLUMN resolution;
ALTER TABLE televisions ADD COLUMN vertical_resolution int;
ALTER TABLE televisions ADD COLUMN horizontal_resolution int;

\d+ televisions;
