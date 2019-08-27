const express = require("express");
const Movie = require("../models/Movie");
const mongoose = require("mongoose");
const router = express.Router();

router.get("/", (req, res, next) => {
  Movie.find({})
    .then(movie => {
      res.render("movies", { movie });
    })
    .catch(err => console.log(err));
});

router.get("/:movieId", (req, res) => {
  const { movieId } = req.params;

  Movie.findById(movieId)
    .then(movie => {
      console.log("Result: ", movie);
      res.render("displayMovie", { movie });
    })
    .catch(err => console.log(err));
});

module.exports = router;
