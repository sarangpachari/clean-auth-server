const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const connectDB = async () => {
  try {
    await prisma.$connect();
    console.log("Database connected successfully.");
  } catch (error) {
    console.error("Failed - MongoDB Connection !");
    process.exit(1);
  }
};

connectDB();

module.exports = prisma;
