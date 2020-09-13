/** @format */

const dotenv = require('dotenv');
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
const port = 3000;

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

const db = mysql.createConnection({
  host: process.env.host,
  user: process.env.username,
  password: process.env.password,
  database: process.env.database,
});

app.get('/customer', (req, res) => {
  let sql = 'SELECT * FROM quiz.customer';
  db.query(sql, (err, results) => {
    if (err) {
      throw err;
    } else {
      res.json(results);
    }
  });
});

app.post('/customer/create', (req, res) => {
  let sql = `INSERT INTO quiz.customer (first_name, last_name, tel_no)
  VALUES (
    '${req.body.first_name}', '${req.body.last_name}', '${req.body.tel_no}'
  )`;
  db.query(sql, (err, results) => {
    if (err) {
      throw err;
    } else {
      res.json(results);
    }
  });
});

app.post('/customer/update', (req, res) => {
  let sql = `UPDATE quiz.customer SET first_name='${req.body.first_name}', last_name='${req.body.last_name}', tel_no='${req.body.tel_no}' WHERE customer_id=${req.body.customer_id};`;
  db.query(sql, (err, results) => {
    if (err) {
      throw err;
    } else {
      res.json(results);
    }
  });
});

app.post('/customer/delete', (req, res) => {
  let sql = `DELETE FROM quiz.customer WHERE customer_id = ${req.body.customer_id};`;
  db.query(sql, (err, results) => {
    if (err) {
      throw err;
    } else {
      res.json(results);
    }
  });
});

app.listen(port, () => {
  console.log('API running on port:', port);
});
