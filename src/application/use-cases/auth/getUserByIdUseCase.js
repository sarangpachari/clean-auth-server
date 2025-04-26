module.exports = (userRepository) => {
  return async (id) => {
    return await userRepository.getUserById(id);
  };
};
