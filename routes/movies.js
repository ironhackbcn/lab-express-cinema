// const express = require('express');
// const mongoose = require('mongoose');

// const data = require('./bin/seeds');
// const Movie = require('../models/Movie');

// mongoose.connect('mongodb://localhost/cinema', {
//   keepAlive: true,
//   useNewUrlParser: true,
//   reconnectTries: Number.MAX_VALUE
// });

// // --- INSERT ALL MOVIES ---
// Movie.insertMany(data)
//   .then(result => {
//     console.log(result);
//     mongoose.connection.close();
//   })
//   .catch(err => console.log(err));