const express = require('express');
const router = express.Router();

// Import Movie model
const Movie = require('../models/Movie');

// Home
router.get('/', (req, res, next) => {
  res.render('index');
});

// Movies
router.get('/movies', async (req, res, next) => {
  try {
    const moviesArray = await Movie.find();
    res.render('movies', { movies: moviesArray });
  } catch (error) {
    next(error);
  }
});

// Detail
router.get('/movies/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const movie = await Movie.findById(id);
    console.log(movie);
    res.render('detail', { movie });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
