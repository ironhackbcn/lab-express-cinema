'ues strict';

const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

router.get('/', async (req, res, next) => {
  try {
    const movies = await Movie.find();
    console.log(movies.title);
    res.render('movies', { movies });
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const movie = await Movie.findById(id);
    res.render('movie-details', movie);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
