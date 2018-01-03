const express = require('express');
const summaryController = express.Router()
const Completion = require('../models/Completion');

summaryController.get('/api/summary', (req, res) => {
  const userId = req.user._id
  const attempted = [];
  console.log('Attempted count', attempted.length)
  const completed = [];
  console.log('Completed count', completed.length)
  const summary = []

  Completion.find({ user_id: userId })
    .exec((err, completions) => {
      console.log('Completions found', completions.length)
      if (completions.length > 0) {
        completions.forEach((completion) => {
          if (completion.completed) {
            completed.push(completion)
          }
          attempted.push(attempted)
        })
      }
      else {
        console.log('Zero completions')
      }
    })

  const percentage = (completed.count/attempted.count) * 100;

  summary.push({'completed': completed})
  summary.push({'attempted': attempted})
  summary.push({'percentage:': percentage})

  res.send(summary)
})

module.exports = summaryController;
