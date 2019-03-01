const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie');
const data = require('../bin/seeds.js');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/ironhack-cinema', {
  keepAlive: true,
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE
});

// Movie.insertMany(data)
//   .then(result => {
//     console.log(result);
//     mongoose.connection.close();
//   })
//   .catch(err => console.log(err));

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {
  res.render('movies');
});

// router.get('/', async (req, res, next) => {
//   try {
//     const tortillas = await Tortilla.find();
//     res.render('list', { tortillas });
//   } catch (error) {
//     next(error);
//   }
// });

module.exports = router;
