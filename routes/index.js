const express = require('express');
const router = express.Router();
const Movie = require('../models/Movies');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', async (req, res, next) => {
  try {
    const movies = await Movie.find();
    res.render('movies', { movies });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
