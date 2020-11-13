const express = require('express');
// const mysql = require('mysql');
const morgan = require('morgan');
const db_config = require('./config/db');
// const connection = db_config.init();

require('dotenv').config();
require('colors');

const transactions = require('./routes/transactions');

const app = express();

// db_config.connect(connection);

app.use(express.json());
app.use('/api/v1/transactions', transactions);

app.use(morgan('dev'));

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.blue.bold
  )
);
