const express = require('express');
const taskController = express.Router();
const Task = require('../models/Task');
const TaskType = require('../models/TaskType');
const Profile = require('../models/Profile');

taskController.get('/api/task', (req, res) => {
  console.log('Task controller!')
  const { profile } = req.user

  Profile.findById(profile)
    .populate('tracks')
    .exec((err, foundProfile) => {
      if (err) { console.log(err) }
      // console.log('Found profile', foundProfile)
      const trackId = foundProfile.tracks[0]._id
      console.log(trackId)
      TaskType.find({ track: trackId })
        .exec((err, taskTypes) => {
          if (err) { console.log(err) }
          const randomType = taskTypes[Math.floor(Math.random() * taskTypes.length)];
          console.log('Task types found!', randomType)
          Task.find({ taskType: randomType._id })
            .exec((err, tasks) => {
              const randomTask = tasks[Math.floor(Math.random() * tasks.length)];
              const repRange = [40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]
              const reps = repRange[Math.floor(Math.random() * repRange.length)];
              console.log('Task found!', randomTask, reps)
              res.send([randomTask, reps])
            })
        })
    })
})

module.exports = taskController;
