const express = require("express");
const Movie = require("../models/Movie");
const mongoose = require("mongoose");
const router = express.Router();

/* GET movies page. */
router.get("/", (req, res, next) => {
  Movie.find({})
    .then((movie) => {
      console.log(movie.title);
      res.render("movies", { movie });
    })
    .catch((err) => console.log(err));
});

router.get("/:movieId", (req, res, next) => {
  const { movieId } = req.params;

  Movie.findById(movieId)
    .then((movie) => {
      console.log("Found this movie: ", movie);
      res.render("movieDetail", { movie });
    })
    .catch(next);
});

module.exports = router;
