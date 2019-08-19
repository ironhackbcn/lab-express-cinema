/* eslint-disable no-spaced-func */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable linebreak-style */
const express = require('express');

const router = express.Router();

const mongoose = require('mongoose');

const Movie = require('../models/Movie.js');

router.get('/', (req, res, next) => {
  console.log('entro aqui');
  Movie.find({})
    .then((allTheMovies) => {
      res.render('movies', { allTheMovies });
    })
    .catch((error) => {
      console.log(`Error while getting the books from the DB:, ${error}`);
    });
});

router.get('/id?=id', (req, res, next) => {
  const { id } = req.query;
  console.log (id)
  Movie.findById({ _id: id })
    .then((theMovie) => {
      console.log ('The movie is '+theMovie)
      res.render('details', { theMovie });
    })
    .catch((error) => {
      console.log(`Error while getting the books from the DB:, ${error}`);
    });
});

module.exports = router;
