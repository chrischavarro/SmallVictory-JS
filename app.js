const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const authController = require('./routes/authController');
require('./services/passport');
const app = express();
app.use(passport.initialize());
app.use(passport.session());

if (process.env.NODE_ENV === 'production') {
  mongoose.connect(keys.mongoURI)
} else {
  mongoose.connect('mongodb://localhost/small-victory');
}

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', authController);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // Like our main.js file or main.css file
  app.use(express.static('client/build'))

  // Express will serve up the index.html file
  // If it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const port = process.env.PORT || 5000;

app.listen(port);

module.exports = app;
