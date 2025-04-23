module.exports = (userRepository) => {
  return async (userData) => {
    return await userRepository.createUser(userData);
  };
};
