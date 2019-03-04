const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', async (req, res, next) => {
  try {
    const arrayMovies = await Movie.find();
    res.render('movies', { allMovies: arrayMovies }); // kaka yop elijo ponerl el nombre que quiera
  } catch (error) {
    next(error);
  }
});

router.get('/movies/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const arrayMovie = await Movie.findById(id);
    res.render('detail', { theMovie: arrayMovie });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
