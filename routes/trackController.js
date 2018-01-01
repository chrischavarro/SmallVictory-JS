const express = require('express');
const trackController = express.Router();
const Track = require('../models/Track');
const Profile = require('../models/Profile');

trackController.get('/api/tracks/get', (req, res) => {
  const { profile } = req.user
  Profile.findById(profile)
    .exec((err, profile) => {
      console.log('Profile!', profile)
    })
  console.log('Api tags', profile);
})

module.exports = trackController;
