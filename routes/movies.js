const express = require("express");
const Movie = require("../models/Movie");
const mongoose = require("mongoose");
const router = express.Router();

/* GET movies page. */
router.get("/", (req, res, next) => {
  Movie.find({})
    .then(movie => {
      res.render("movies", { movie });
    })
    .catch(err => console.log(err));
});

/* GET movie detail */
router.get("/:movieId", (req, res) => {
  const { movieId } = req.params;

  Movie.findById(movieId)
    .then(movie => {
      console.log("Found this movie: ", movie);
      res.render("movieDetail", { movie });
    })
    .catch(err => console.log(err));
});

module.exports = router;
