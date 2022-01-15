DROP DATABASE IF EXISTS books_db;
-- Creates the "books_db" database --
CREATE DATABASE books_db;
USE books_db;

-- Add biography table --
CREATE TABLE biographies (
	id INT NOT NULL,
    firstName VARCHAR(100) NOT NULL
);