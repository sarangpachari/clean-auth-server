module.exports = (userRepository) => {
  return async (email) => {
    return await userRepository.getUserByEmail(email);
  };
};
