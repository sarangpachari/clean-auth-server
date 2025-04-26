const express = require("express");
const router = express.Router();

module.exports = (controller) => {
  router.post("/auth/register", controller.create);
  router.post("/auth/login", controller.login)
  router.get("/:id", controller.getById);
  return router;
};
