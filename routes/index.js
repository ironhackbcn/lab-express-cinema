const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');
const data = require('../bin/seeds.js');
const mongoose = require('mongoose');

// Movie.insertMany(data)
//   .then(result => {
//     console.log(result);
//     mongoose.connection.close();
//   })
//   .catch(err => console.log(err));
/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});
router.get('/movies', async (req, res, next) => {
  try {
    const movies = await Movie.find();
    res.render('movies', { movies });
  } catch (error) {
    next(error);
  }
});

router.get('/movies/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const moviedetails = await Movie.findById(id);
    res.render('info', moviedetails);
  } catch (error) {
    next(error);
  }
});
module.exports = router;