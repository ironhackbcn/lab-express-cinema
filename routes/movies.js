const express = require('express');
const Movie = require('../models/Movie');

const router = express.Router();

/* GET all movies page. */
router.get('/', (req, res, next) => {
  // res.render('movies', { title: 'Cinema Ironhack' });
  Movie.find()
    .then((movies) => {
      console.log('movies', movies);
      res.render('movies', { movies });
    })
    .catch(next);
});

/* GET movie info */

router.get('/:movieId', (req, res, next) => {
  const { movieId } = req.params;

  Movie.findById(movieId)
    .then((movie) => {
      console.log(`the movie is: ${movie}`);
      res.render('movieInfo', { movie });
    })
    .catch(next);
});

module.exports = router;
