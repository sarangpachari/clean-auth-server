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
const createUserUseCase = require('./application/use-cases/auth/createUserUseCase')(UserRepositoryImpl);
const getUserByIdUseCase = require('./application/use-cases/auth/getUserByIdUseCase')(UserRepositoryImpl);
const getUserByEmailUseCase = require('./application/use-cases/auth/getUserByEmailUseCase')(UserRepositoryImpl)
const loginUserUseCase = require('./application/use-cases/auth/loginUserUseCase')(UserRepositoryImpl);
const UserController = require('./presentation/controllers/UserController')(createUserUseCase, getUserByIdUseCase, loginUserUseCase);
const userRoutes = require('./presentation/routes/userRoutes')(UserController);

app.use('/api/users', userRoutes)


module.exports = app