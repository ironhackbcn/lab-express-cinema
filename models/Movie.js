const mongoose = require('mongoose');

const {
  Schema,
} = mongoose;

const movieSchema = new Schema({
  title: String,
  director: String,
  stars: Array,
  image: String,
  description: String,
  // eslint-disable-next-line comma-dangle
  showtimes: Array
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
