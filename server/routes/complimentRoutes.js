const express = require('express');
const complimentController = require('../controllers/complimentController.js');

const router = express.Router();

//GET request to /compliments?tag=1&user=1
router.get('/', complimentController.getCompliments, (req, res) => {
  return res
    .set('Content-Type', 'application/json')
    .status(200)
    .json({ complimentsList: res.locals.complimentsList });
});

//POST request to /compliments?user=1
//responds with compliment that was created
router.post('/', complimentController.postCompliment, (req, res) => {
  return res.json({ compliment: res.locals.compliment });
});

// router.get('/tags', complimentController.getTags, (req, res) => {
//   return res.json({ tags: res.locals.tags });
// });

router.patch('/', complimentController.updateCompliment, (req, res) => {
  return res.json({ compliment: res.locals.compliment });
});

router.delete('/', complimentController.deleteCompliment, (req, res) => {
  return res.status(200).send({ message: 'compliment deleted' });
});

module.exports = router;
