require('dotenv').config();

const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: 'expensetracker',
});

connection.connect((err) => {
  if (err) {
    console.error('mysql connection error : ', err);
  } else {
    console.log('mysql is connected successfully!');
  }
});

module.exports = connection;
