const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  // Check if token exists
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Access Denied: No token provided" });
  }

  const token = authHeader.split(" ")[1];

  try {
    // Verify token
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified; // user object token theke asbe
    next(); // proceed to the route handler
  } catch (err) {
    res.status(400).json({ message: "Invalid Token" });
  }
};

module.exports = verifyToken;
