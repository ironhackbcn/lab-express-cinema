'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: {
    type: String
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
  showTimes: {
    type: Array
  }
}
);

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
