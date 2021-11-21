const express = require('express');
const userController = require('../controllers/userController');
const complimentController = require('../controllers/complimentController');
const router = express.Router();

// POST request to /users/login
router.post('/login', userController.loginUser, complimentController.getCompliments, complimentController.getTags, (req, res) => {
  res.status(200).json({ 
    user_id: res.locals.user_id, 
    complimentsList: res.locals.complimentsList, 
    tagsList: res.locals.tags });
});

// POST request to /users/signup
router.post('/signup', userController.registerUser, complimentController.getCompliments, complimentController.getTags, (req, res) => {
  res.status(200).send({ 
    user_id: res.locals.user_id, 
    complimentsList: res.locals.complimentsList, 
    tagsList: res.locals.tags });
});

module.exports = router;
