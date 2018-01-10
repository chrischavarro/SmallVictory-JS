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
    console.log('USER HAS PROFILE?', req.user.profile)
    if (req.user.profile) {
      res.redirect('/dashboard');
    } else {
      res.redirect('/')
    }
  }
);

authController.get('/api/logout', (req, res) => {
  req.logout();
  res.redirect('/');
})
module.exports = authController;
