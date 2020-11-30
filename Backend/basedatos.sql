create database libreria;

create table books (
	id Serial PRIMARY KEY,
	rating INT,
	title VARCHAR(255),
	image VARCHAR(255)
);