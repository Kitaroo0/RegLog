const express = require('express');
const router = express.Router();
const path = require('path');

const requireAuth = require('../middlewares/requireAuth');

router.get('/', requireAuth, (req, res) => {
  res.sendFile(path.join(__dirname, '../public/html/welcome.html'));
});

module.exports = router;