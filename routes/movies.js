const express = require("express");
const Movie = require("../models/Movie");

const router = express.Router();

/* GET movies page. */
router.get("/", (req, res, next) => {
  res.render("movies", { title: "Cinema Ironhack" });
});

module.exports = router;
