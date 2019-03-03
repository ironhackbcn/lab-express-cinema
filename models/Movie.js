'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
// const seeds = require('../bin/seeds.js')

mongoose.connect('mongodb://localhost/cinema', {

  keepAlive: true,
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE

})

const movieSchema = new Schema({
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
})

const Movie = mongoose.model('Movie', movieSchema)

/* Movie.insertMany(seeds)
  .then(result => {
    console.log(result)
    mongoose.connection.close()// Cerrar la conexion con la base de datos
  })
  .catch(error => {
    console.log(error)
  })
*/
module.exports = Movie
