const express = require('express');
const Movie = require('../models/Movie');
const router = express.Router();

/* GET List of movies */
router.get('/', (req, res, next) => {
    Movie.find()
        .then((movies) => {
            res.render('movies', { movies });
        })
        .catch(next);
});

/* GET details page. */
router.get('/:movieId', (req, res, next) => {
    const { movieId } = req.params;

    Movie.findById(movieId)
        .then((movie) => {
            if (movie) {
                res.render('movieDetails', { movie });
            } else {
                //Render not -found.
            }
        })
        .catch(next);
});
module.exports = router;