const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index');
});

// GET movies page
router.get('/movies', async (req, res, next) => {
  try {
    const movie = await Movie.find();
    res.render('movies', { movie });
  } catch (error) {
    next(error);
  }
});

// GET movie-info page
router.get('/movie-info/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const movieInfo = await Movie.findById(id);
    res.render('movie-info', movieInfo);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
