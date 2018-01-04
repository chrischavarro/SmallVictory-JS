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
  var percentage = 0
  const trackList = [];

  // Completion.find({ user_id: userId })
  //   .exec((err, completions) => {
  //     console.log('Completions found', completions.length)
  //     if (completions.length > 0) {
  //       var percentage = (completed.length/attempted.length) * 100;
  //       completions.forEach((completion) => {
  //         if (completion.completed) {
  //           completed.push(completion)
  //         }
  //         attempted.push(attempted)
  //       })
  //     }
  //     // else {
  //     //   console.log('Zero completions')
  //     // }
  //
  //   })
    Profile.findById(profile)
    .populate('tracks')
    .exec((err, profile) => {

      async.each(profile.tracks, (track, cb) => {
        trackList.push(track.name)
        console.log(track.name)
      })

      // profile.tracks.forEach((track) => {
      //   console.log('TRACK LIST', track.name)
      // })
    })
  summary.push({'completed': completed})
  summary.push({'attempted': attempted})
  summary.push(trackList)
  summary.push(percentage)
  console.log('TRACK ARRAY', trackList)

  res.send(summary)
})

module.exports = summaryController;
