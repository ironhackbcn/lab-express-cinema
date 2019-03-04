const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Movies = require('../models/Movies');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index');
});

/* GET movies page. */
router.get('/movies', async (req, res, next) => {
  try {
    const movies = await Movies.find();
    res.render('list', { movies });
  } catch (error) {
    next(error);
  }
});

// GET list movies page
router.get('/movies/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const movies = await Movies.findById(id);
    res.render('detail', movies);
  } catch (error) {
    next(error);
  }
  res.render('list', { title: 'movies' });
});

module.exports = router;
