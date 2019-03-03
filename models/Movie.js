'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  director: {
    type: String
  },
  stars: {
    type: Array,
    minlength: 3,
    maxlength: 3
  },
  image: {
    type: String
  },
  description: {
    type: String
  },
  showtime: {
    type: Array
  }
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
