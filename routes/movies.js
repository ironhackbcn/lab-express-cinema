// const express = require('express');
// const router = express.Router();
// const mongoose = require('mongoose');
// const data = require('./bin/seeds');
// const Movies = require('./models/Movie');

// mongoose.connect('mongodb://localhost/cinema', {
//   keepAlive: true,
//   useNewUrlParser: true,
//   reconnectTries: Number.MAX_VALUE
// });

// Movies.insertMany(data)
//   .then(result => {
//     console.log(result);
//   })
//   .catch(err => console.error(err));

// router.get('/', (req, res, next) => {
//   res.render('index', { title: 'Express' });
// });

// module.exports = router;
