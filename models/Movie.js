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
    type: Array
  },
  image: {
    type: String,
    default: 'http://nws.eurocities.eu/MediaShell/GetMediaBytes?mediaReference=&ph=4'
  },
  description: {
    type: String
  },
  showtimes: {
    type: Array
  }
});

 const Movie = mongoose.model('Movie', movieSchema);

 module.exports = Movie;