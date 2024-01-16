const express = require('express');
const router = express.Router();
const path = require('path');

const connection = require('../db/connection');
const bcrypt = require('bcrypt');

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/html/login.html'));
});

router.post('/', (req, res) => {
    const { username, password } = req.body;

    const sql = 'SELECT * FROM users WHERE username = ?';
    connection.query(sql, [username], (error, results) => {
    if (error) throw error;

    if (results.length > 0) {
      const user = results[0];

      bcrypt.compare(password, user.password, (err, isValid) => {
        if (err) throw err;

        if (isValid) {
          req.session.user = username;
          console.log('Session user set:', req.session.user);
          res.redirect('/welcome');
        } else {
          res.status(401).send('Invalid password');
        }
      });
    } else {
      res.status(404).send('User not found');
    }
  });
});

module.exports = router;