'use strict';

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const data = require('./bin/seeds.js');
const Schema = mongoose.Schema;
const indexRouter = require('./routes/index');

const Movie = require('./models/Movie');

const app = express();

mongoose.connect('mongodb://localhost/cinema', {
  keepAlive: true,
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE
});
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.get('/movies', async (req, res, next) => {
  try {
    const moviesArray = await Movie.find();
    res.render('movies', { movies: moviesArray });
  } catch (error) {
    next(error);
  }
});

app.get('/movie/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const movie = await Movie.findById(id);
    res.render('detail', movie);
  } catch (error) {
    next(error);
  }
});

// --- INSERTAR PELIS ---
// Movie.insertMany(data)
//   .then(result => {
//     // console.log(result);
//     mongoose.connection.close();
//   })
//   .catch(err => console.log(err));

// -- 404 and error handler

// NOTE: requires a views/not-found.ejs template
app.use((req, res, next) => {
  res.status(404);
  res.render('not-found');
});

// NOTE: requires a views/error.ejs template
app.use((err, req, res, next) => {
  // always log the error
  console.error('ERROR', req.method, req.path, err);

  // only render if the error ocurred before sending the response
  if (!res.headersSent) {
    res.status(500);
    res.render('error');
  }
});

module.exports = app;
