const express = require('express');
const router = express.Router();
const path = require('path');

const connection = require('../db/connection');
const bcrypt = require('bcrypt');

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/html/register.html'));
});

router.post('/', (req, res) => {
    const { username, email, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).send('Passwords do not match. Please try again.');
    }

    if (password.length < 8) {
      return res.status(400).send('Password should be at least 8 characters long. Please try again.');
  }

    const checkUserQuery = 'SELECT * FROM users WHERE username = ?';
    connection.query(checkUserQuery, [username], (error, results) => {
    if (error) throw error;

    if (results.length > 0) {
      return res.status(409).send('Username already exists. Please try again');
    } else {

      bcrypt.hash(password, 10, (err, hash) => {
        if (err) throw err;

        const insertUserQuery = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
        connection.query(insertUserQuery, [username, email, hash], (err) => {
          if (err) throw err;

          res.redirect('/login');
        });
      });
    }
  });
});

module.exports = router;