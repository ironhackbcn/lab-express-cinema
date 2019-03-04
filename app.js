'use strict';

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const mongoose = require('mongoose');
//  const data = require('./bin/seeds.js');   //una vez metido los datos en mongo hay que quitar estas constantes
//  const Movie = require('./models/Movie.js');

const indexRouter = require('./routes/index');

const app = express();

mongoose.connect('mongodb://localhost/cinema', {
  keepAlive: true,
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE
});

// Movie.insertMany(data)    // cuando se ha introducido en mongo se comenta, solo hay qu erhacerlo una vez para introducir los datos
//   .then(result => {        // al hacer insertMany comprobarlo en el mongo: 1. use cinema 2.db.Movie.find() y vemos si esta la info
//     console.log(result);   // esta operacion introduce una colecciobn Movie con los datos de seeds en el dbs cinema, si te metes...
//     mongoose.connection.close();   // en use cinema y pones show collections alli veras Movies, y podras hacer db.movies.findf()
//   })
//   .catch(err => console.log(err));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

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
