/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Cinema Ironhack' });
});

module.exports = router;
