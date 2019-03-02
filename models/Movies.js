'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  director: {
    type: String,
    required: true
  },
  stars: {
    type: Array,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  showtimes: {
    type: Array,
    required: true
  }
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;

/* const tortillaSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  special: {
    type: String
  },
  size: {
    type: String,
    enum: ['small', 'medium', 'big']
  }
});

const Tortilla = mongoose.model('Tortilla', tortillaSchema);

module.exports = Tortilla; */
