const express = require("express");
const router = express.Router();

module.exports = (controller) => {
  router.post("/auth", controller.create);
  router.get("/:id", controller.getById);
  return router;
};
