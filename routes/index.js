const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Cinema Ironhack' });
});

router.get('/movies', async (req, res, next) => {
  try {
    const movies = await Movie.find();
    console.log(movies.title);
    res.render('movies', { movies });
  } catch (err) {
    next(err);
  }
});

router.get('/movie/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const movie = await Movie.findById(id);
    res.render('movie-details', { movie });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
