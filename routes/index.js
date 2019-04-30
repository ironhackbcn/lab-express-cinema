const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const movieRouter = require(`./movies`);


router.use('/movies', movieRouter);
/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

module.exports = router;
