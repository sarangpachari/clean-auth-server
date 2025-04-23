const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);


const UserRepositoryImpl = require('./infrastructure/database/repositories/UserRepositoryImpl')();
const createUserUseCase = require('./application/use-cases/createUserUseCase')(UserRepositoryImpl);
const getUserByIdUseCase = require('./application/use-cases/getUserByIdUseCase')(UserRepositoryImpl);
const UserController = require('./presentation/controllers/UserController')(createUserUseCase, getUserByIdUseCase);
const userRoutes = require('./presentation/routes/userRoutes')(UserController);

app.use('/api/users', userRoutes)


module.exports = app