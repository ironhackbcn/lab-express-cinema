const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const data = require('../bin/seeds');
const Movies = require('../models/Movie');

mongoose.connect('mongodb://localhost/cinema', {
  keepAlive: true,
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE
});

// // Insert data first time
// Movies.insertMany(data)
//   .then(result => {
//     console.log('Datta added');
//   })
//   .catch(err => console.error(err));

router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.get('/movies', async (req, res, next) => {
  try {
    const movies = await Movies.find();
    res.render('movies', { movies });
  } catch (error) {
    next(error);
  }
});

router.get('/movies/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    console.log(id);
    const movie = Movies.findById(id);
    res.render('movie-details', { movie });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
