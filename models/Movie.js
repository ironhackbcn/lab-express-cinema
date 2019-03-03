'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const moviesSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  director: {
    type: String
  },
  stars: {
    type: Array
  },
  image: {
    type: String
  },
  description: {
    type: String
  },
  showtimes: {
    type: Array
  }
});

const Movies = mongoose.model('movie', moviesSchema);

module.exports = Movies;
