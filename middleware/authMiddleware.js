const jwt = require("jsonwebtoken");
const config = require("../config.json");
const msgHandler = require("../response-messages.json");

function verifyToken(req, res, next) {
  const token = req.header("Authorization");
  if (!token) return res.status(401).json({ error: msgHandler.ACCESS_DENIED });
  try {
    const decoded = jwt.verify(token, config.authKey);
    if (!decoded.userId || !decoded.username) throw new Error(msgHandler.INVALID_TOKEN);
    req.userId = decoded.userId;
    req.username = decoded.username;
    next();
  } catch (error) {
    res.status(401).json({ error: msgHandler.INVALID_TOKEN });
  }
}

module.exports = verifyToken;
