const express = require('express');
const complimentController = require('../controllers/complimentController.js');

const router = express.Router();

//GET request to /compliments?tag=1&user=1
router.get('/', complimentController.getCompliments, (req, res) => {
  return res
    .set('Content-Type', 'application/json')
    .status(200)
    .json({ compliments: res.locals.compliments });
});

//POST request to /compliments?user=1
// router.post('/', complimentController.getCompliments, (req, res) => {
//   return res
//     .set('Content-Type', 'application/json')
//     .status(200)
//     .json({ compliments: res.locals.compliments });
// });
