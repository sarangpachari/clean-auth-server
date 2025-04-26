const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = (userRepository) => {
  return async (name, email, password) => {
    const existingUser = await userRepository.getUserByEmail(email);
    if (existingUser) throw new Error("Email already exists.");

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await userRepository.createUser({
      name,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign(
      { id: newUser.id, email: newUser.email },
      process.env.JWT_SECRET,
      { expiresIn: "5m" }
    );

    return {
      token,
      user: { id: newUser.id, name: newUser.name, email: newUser.email },
    };
  };
};
