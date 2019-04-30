var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Movie = require(`./../models/Movie`);

router.get(`/`, (req,res,next) => {
  console.log('hey')
  Movie.find({})
    .then((movie) => {
      console.log(movie)
      res.render('movies', {movie});
    })
    .catch((err) => console.log(err));
})


router.get('/:id', (req, res, next) => {
  Movie.findById(req.params.id)
    .then((movie) => {
      res.render(`details`, {movie});
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;