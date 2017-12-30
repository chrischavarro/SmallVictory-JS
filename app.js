const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const logger = require('morgan');
const session = require('express-session');

const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const keys = require('./config/keys')
const authController = require('./routes/authController');
const seedController = require('./routes/seedController');
const tagController = require('./routes/tagController');
const profileController = require('./routes/profileController');
require('./services/passport');

const app = express();

if (process.env.NODE_ENV === 'production') {
  mongoose.connect(keys.mongoURI)
} else {
  mongoose.connect('mongodb://localhost/small-victory');
}

// app.use(session({
//   secret: 'small-victory',
//   resave: true,
//   saveUninitialized: true
// }))
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    secret: 'FDSJLDSJDFSCXVNM'
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());


app.use(logger('dev'));

app.use('/', authController);
app.use('/', seedController);
app.use('/', tagController);
app.use('/', profileController);

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
