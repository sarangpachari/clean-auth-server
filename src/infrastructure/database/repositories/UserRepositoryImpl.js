const prisma = require("../../../config/config-db");

module.exports = () => ({
  createUser: async (userData) => {
    return await prisma.user.create({ data: userData });
  },
  getUserById: async (id) => {
    return await prisma.user.findUnique({ where: { id } });
  },
});
