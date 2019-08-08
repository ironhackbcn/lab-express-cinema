const express = require('express');
const Movie = require('../models/Movie');

const router = express.Router();

/* GET books listing. */
router.get('/', (req, res, next) => {
  Movie.find()
    .then((movies) => {
      console.log('movies', movies);
      res.render('movies', { movies });
    })
    .catch(next);
});

router.get('/:movieId', (req, res, next) => {
  const { movieId } = req.params;

  Movie.findById(movieId)
    .then((movie) => {
      res.render('movie', { movie });
    })
    .catch(next);
});

module.exports = router;
