const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {
  // Get token from the header
  const token = req.header('x-auth-token');

  // Check if no token
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  // Verify token
  // If there is a token, jwt.verify will decode it
  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));

    // take request object and assign to user
    req.user = decoded.user;
    next();
    // If there isn't a token, display an error msg
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
