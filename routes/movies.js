const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

/* GET home page. */
router.get('/', async (req, res, next) => {
  try {
    const movies = await Movie.find();
    res.render('movies', { movies });
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const movie = await Movie.findById(id);
    res.render('movie-detail', { movie });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
