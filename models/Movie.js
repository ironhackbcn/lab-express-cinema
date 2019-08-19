/* eslint-disable linebreak-style */
const mongoose = require('mongoose');

const { Schema } = mongoose;

const movieSchema = new Schema({
  title: { type: String, required: true, unique: true },
  director: { type: String },
  stars: [],
  image: { type: String, required: true },
  description: { type: String, required: true },
  showtimes: [],
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
