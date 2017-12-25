const express = require('express');
const authController = express.Router();
const User = require('../models/user');
const passport = require('passport');

authController.get('/auth/google',
  passport.authenticate('google', { scope: ['profile'] }));

authController.get('/auth/google/callback',
  passport.authenticate('google'),
  (req, res) => {
    res.redirect('/');
  });

module.exports = authController;
