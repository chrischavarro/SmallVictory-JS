const express = require('express');
const summaryController = express.Router()
const Completion = require('../models/Completion');
const Profile = require('../models/Profile')
const async = require('async');

summaryController.get('/api/summary', (req, res) => {
  const userId = req.user._id
  const { profile } = req.user
  const attempted = [];
  const completed = [];
  const summary = [];
  const trackList = [];

  Completion.find({ user_id: userId })
    .exec((err, completions) => {
      // console.log('Completions found', completions.length)
      if (completions.length >= 1) {
        var percentage = (completed.length/attempted.length) * 100;
        completions.forEach((completion) => {
          if (completion.completed) {
            completed.push(completion)
          }
          attempted.push(attempted)
        })
      }
      else {
        var percentage = 0;
      }
      Profile.findById(profile)
      .populate('tracks')
      .exec((err, profile) => {
        profile.tracks.forEach((track) => {
          trackList.push(track.name)
        })
        summary.push({'completed': completed})
        summary.push({'attempted': attempted})
        summary.push(trackList)
        summary.push(percentage)

        res.send(summary)
      })

    })
})

module.exports = summaryController;
