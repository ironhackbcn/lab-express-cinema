const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie');

router.get('/', async (req, res, next) => {
  try {
    const movies = await Movie.find();
    res.render('list', { movies });
  } catch (error) {
    next(error);
  }
});
