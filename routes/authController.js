const express = require('express');
const passport = require('passport');
const authController = express.Router();

authController.get('/api/current_user', (req, res) => {
  console.log('Current user', req.user)
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
    res.redirect('/api/current_user');
  }
);

module.exports = authController;
