const express = require('express')
const router = express.Router()
const Movies = require('../models/Movies')

// GET home page.
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Cinema Ironhack' })
})

// GET Movies page.
router.get('/movie-list', async (req, res, next) => {
  try {
    const movie = await Movies.find()
    res.render('movies', { movie })
  } catch (error) {
    next(error)
  }
})

// GET Movies detail page.
router.get('/movie-detail/:id', async (req, res, next) => {
  const { id } = req.params
  try {
    const movie = await Movies.findById(id)
    res.render('movie-detail', movie)
  } catch (error) {
    next(error)
  }
})

module.exports = router
