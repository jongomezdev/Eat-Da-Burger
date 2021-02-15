DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
burger_name VARCHAR(255) NOT NULL,
devoured BOOLEAN DEFAULT 0
);

INSERT INTO burgers (burger_name, devoured)
VALUES ('Cheeseburger', false),
('Double Cheesburger', false),
('Quad Bypass', true);