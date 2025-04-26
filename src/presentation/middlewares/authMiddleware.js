const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.headers("Authorization");
  if (!token)
    return res
      .status(401)
      .json({ message: "No token Provided. Authorization denied!" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(404).json({ message: "Token Expired or Invalid." });
  }
};
