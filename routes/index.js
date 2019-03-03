const express = require('express')
const router = express.Router()
const Movie = require('../models/Movie')

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Cinema Ironhack' })
})

router.get('/movies', async (req, res, next) => {
  try {
    const movies = await Movie.find()
    res.render('movies', { movies })
  } catch (error) {
    next(error)
  }
})

router.get('/movie/:id', async (req, res, next) => {
  const { id } = req.params
  try {
    const movie = await Movie.findById(id)
    
    res.render('detail', movie)
  } catch (error) {
    next(error)
  }
})

module.exports = router
