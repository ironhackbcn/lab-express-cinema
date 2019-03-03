const express = require('express');
const router = express.Router();

const Movies = require('../models/Movie');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.post('/movies', async (req, res, next) => {
  try{
    const movies = await Movies.find();
    res.render('movies', {movies});
  } catch (error){
    next(error);
  }
  
});

router.get('/movies/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const movie = await Movies.findById(id);
    res.render('detail', movie);
  } catch (error) {
    next(error);
  }
});


module.exports = router;
