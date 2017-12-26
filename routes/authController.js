const express = require('express');
const passport = require('passport');
const authController = express.Router();

authController.get('/api/current_user', (req, res) => {
  res.send(req.user);
});

authController.get('/auth/google',
  passport.authenticate('google', {
    scope: ['profile']
  })
);

authController.get('/auth/google/callback',
  passport.authenticate('google'),
  (req, res) => {
    res.redirect('/');
  }
);

module.exports = authController;
