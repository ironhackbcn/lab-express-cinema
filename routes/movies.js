const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");

const seeds = require("../bin/seeds.js");

/* GET movies page. */
router.get("/movies", (req, res, next) => {
  res.render("movies");
});

module.exports = router;
