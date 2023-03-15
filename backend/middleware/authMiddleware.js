const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  let token = req.body.token || req.query.token || req.headers["authorization"];

  if (!token) {
    return res.status(403).send({
      message: "Token is required",
    });
  }

  try {
    if (token.startsWith("Bearer ")) {
      //   token = token.slice(7, token.length);
      token = token.split(" ")[1];
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).send({
      message: "Invalid Token",
    });
  }
};

module.exports = verifyToken;
