-- Open up psql and create a sql_lab database if you haven't already done so. 
-- If you already have a sql_lab database, no need to create it again.

-- Write SQL commands under the prompts below, and run the file to get results.

-- In case there is already a computers table, drop it
    DROP TABLE computers;

-- Create a computers table
    CREATE TABLE computers (id serial, make varchar(20), cpu_speed int, memory_size int, price int, release_date timestamp, photo_url text, storage_amount int, number_usb_ports int, number_firewire_ports int, number_thunderbolt_ports int );

-- The table should have id, make, model, cpu_speed, memory_size,
--  price, release_date, photo_url, storage_amount, number_usb_ports,
--  number_firewire_ports, number_thunderbolt_ports
    \d computers

-- Insert 4 computers into the computers table
    INSERT INTO computers
    (make)
    VALUES
    ('DELL'),
    ('MAC'),
    ('SAMSUNG'),
    ('ALIENWARE');


-- Select all entries from the computers table
    SELECT * FROM computers;

-- HUNGRY FOR MORE? 
-- Look at this afternoon's instructor notes and read on altering tables before attempting below

-- Alter the computers_models, removing the storage_amount column
-- and add storage_type and storage_size columns
ALTER TABLE computers DROP COLUMN storage_amount;
ALTER TABLE computers ADD COLUMN storage_type varchar(20);
ALTER TABLE computers ADD COLUMN storage_size int;

\d+ computers