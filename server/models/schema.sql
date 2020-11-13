CREATE DATABASE expensetracker;

CREATE TABLE items (
  id int PRIMARY KEY AUTO_INCREMEaNT,
  item varchar(255) NOT NULL,
  amount int NOT NULL
);
