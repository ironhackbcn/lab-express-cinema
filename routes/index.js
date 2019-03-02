const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index');
});

// GET Movies list page
router.get('/movies', async (req, res, next) => {
  try {
    const movies = await Movie.find();
    res.render('movies', { movies });
  } catch (error) {
    next(error);
  }
});

// GET movie details
router.get('/movies/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const movie = await Movie.findById(id);
    res.render('details', movie);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
