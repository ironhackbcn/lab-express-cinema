const express = require('express');
const router = express.Router();

// Home
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

// Movies
router.get('/movies', (req, res, next) => {
  res.render('movies');
});

module.exports = router;
