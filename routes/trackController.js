const express = require('express');
const trackController = express.Router();
const Track = require('../models/Track');
// const Tag = require('../models/Tag');
const Profile = require('../models/Profile');


trackController.get('/api/tracks/get', (req, res) => {
  const { profile } = req.user
  Profile.findById(profile)
    .exec((err, profile) => {
      Track.find({ tags: { $in: profile.tags } })
        .exec((err, tracks) => {
          console.log('Associated tracks!', tracks)
          res.send(tracks)
        })
    })
})

trackController.get('/api/tracks/select/:trackId', (req, res) => {
  // const trackId = Object.keys(req.body).toString()
  // console.log('Showing id', trackId)
  const { trackId } = req.params
  const { profile } = req.user
  Profile.findById(profile)
    .exec((err, profile) => {
      // Track.findById(trackId)
      //   .exec((err, track) => {
      //     console.log('Found track', track)
      //   })
      profile.tracks.push(trackId)
      profile.save()
    })
    res.send(trackId)
})

module.exports = trackController;
