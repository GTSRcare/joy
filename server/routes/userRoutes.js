const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

// POST request to /users/login
router.post("/login", userController.loginUser, (req, res) => {
  res.status(200).json({ user_id: res.locals.user_id });
});

// POST request to /users/signup
router.post("/signup", userController.registerUser, (req, res) => {
  res.status(200).send({ user_id: res.locals.user_id });
});

module.exports = router;
