const express = require('express');
const summaryController = express.Router()
const Completion = require('../models/Completion');
const Profile = require('../models/Profile')
const async = require('async');

summaryController.get('/api/summary', (req, res) => {
  const userId = req.user._id
  const { profile } = req.user
  var attempted = 0;
  var completed = 0;
  const summary = [];
  const trackList = [];

  Completion.find({ user_id: userId })
    .exec((err, completions) => {
      var percentage = 0;
      if (completions.length > 0) {
        completions.forEach((completion) => {
          if (completion.completed) {
            completed += 1
          }
          attempted += 1
        })

        if (completions.length > 0) {
          var percentage = Math.floor((completed/attempted) * 100);
        }
        else if (completions.length === 0) {
          var percentage = 0;
        }
      }
      Profile.findById(profile)
      .populate('tracks')
      .exec((err, profile) => {
        if (profile) {
          if (err) { console.log('ERROR WHILE RETRIEVING PROFILE', err)}
          profile.tracks.forEach((track) => {
            trackList.push(track.name)
          })
          summary.push({'completed': completed})
          summary.push({'attempted': attempted})
          summary.push(trackList)
          summary.push({'percentage': percentage})
          res.send(summary)
        }
        else {
          res.send(null)
        }
      })

    })
})

module.exports = summaryController;
