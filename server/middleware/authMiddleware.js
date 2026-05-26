const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
  try {

    // Get Authorization Header
    const authHeader = req.headers.authorization;

    // Check Token Exists
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        message: "No token provided",
      });
    }

    // Extract Token
    const token = authHeader.split(" ")[1];

    // Verify Token
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    // Attach User Data
    req.user = decoded;

    // Continue
    next();

  } catch (error) {

    return res.status(401).json({
      message: "Invalid token",
    });
  }
};

module.exports = verifyToken;