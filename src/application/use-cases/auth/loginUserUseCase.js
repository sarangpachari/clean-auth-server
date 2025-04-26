const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = (userRepository) => {
  return async (email, password) => {
    const user = await userRepository.loginUser(email);
    if (!user) throw new Error("Email does not exist!");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error("Invalid Credentials.");

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    return { token, user };
  };
};
