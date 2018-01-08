const express = require('express');
const trackController = express.Router();
const Track = require('../models/Track');
// const Tag = require('../models/Tag');
const Profile = require('../models/Profile');


trackController.get('/api/tracks/get', (req, res) => {
  const { profile } = req.user
  console.log('USER PROFILE', req.user, profile)
  Profile.findById(profile._id)
    .exec((err, profile) => {
      if (err) { console.log('Error occurred when finding profile', err) }
      Track.find({ tags: { $in: profile.tags } })
        .exec((err, tracks) => {
          if (err) { console.log('Error occurred when finding tracks', err) }
          console.log('Associated tracks!', tracks)
          res.send(tracks)
        })
    })
})

trackController.post('/api/tracks/select', (req, res) => {
  const trackId = Object.keys(req.body).toString()
  // const { trackId } = req.body
  // console.log('Showing id', trackId)
  const { profile } = req.user
  Profile.findById(profile)
    .exec((err, profile) => {
      if (err) { console.log('An error occurred', err)}
      profile.tracks.push(trackId)
      profile.save((err, profile) => {
        if (err) { console.log('Error when saving profile!', err) }
        console.log('Saved track to profile!', profile)
      })
      res.send(trackId)
    })
})

module.exports = trackController;
