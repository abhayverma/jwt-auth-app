const express = require('express');
const router = express.Router();
const User = require('../models/User');
const verifyToken = require('../middleware/authMiddleware');

/* GET users listing. */
router.get('/', verifyToken, function(req, res) {
  console.log('username', req.username);
  const user = User.findOne(req.username);
  res.send(user || "User not found");
});

module.exports = router;
