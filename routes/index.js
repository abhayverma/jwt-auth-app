const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authMiddleware');

/* GET home page. */
router.get('/', verifyToken, function(req, res, next) {
  res.render('index', { user: req.username, id: req.userId });
});

module.exports = router;
