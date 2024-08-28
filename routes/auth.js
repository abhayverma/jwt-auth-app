const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../config.json");
const msgHandler = require("../response-messages.json");

// User registration
router.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = User.createUser({ username, password: hashedPassword });
    res
      .status(201)
      .json({
        username: user.username,
        message: msgHandler.REGISTRATION_SUCCESS,
      });
  } catch (error) {
    res.status(500).json({ error: msgHandler.REGISTRATION_FAILED });
  }
});

// User login
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = User.findOne(username);
    if (!user) {
      return res.status(401).json({ error: msgHandler.AUTH_FAILED });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: msgHandler.AUTH_FAILED });
    }
    const token = jwt.sign({ userId: user.id, username }, config.authKey, {
      expiresIn: config.tokenExpiry,
    });
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: msgHandler.LOGIN_FAILED });
  }
});

module.exports = router;
