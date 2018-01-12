const express = require('express');
const taskController = express.Router();
const Task = require('../models/Task');
const TaskType = require('../models/TaskType');
const Profile = require('../models/Profile');
const Completion = require('../models/Completion');

// Pulls random task for user to complete
taskController.get('/api/task', (req, res) => {
  const { profile } = req.user

  Profile.findById(profile)
    .populate('tracks')
    .exec((err, foundProfile) => {
      if (err) { console.log(err) }
      // console.log('Found profile', foundProfile)
      const trackId = foundProfile.tracks[0]._id
      // console.log(trackId)
      TaskType.find({ track: trackId })
        .exec((err, taskTypes) => {
          if (err) { console.log(err) }
          const randomType = taskTypes[Math.floor(Math.random() * taskTypes.length)];
          Task.find({ taskType: randomType._id })
            .exec((err, tasks) => {
              const randomTask = tasks[Math.floor(Math.random() * tasks.length)];
              const repRange = [40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]
              const reps = repRange[Math.floor(Math.random() * repRange.length)];
              res.send([randomTask, reps])
            })
        })
    })
})

// Executed on task's timer end
// CAN THIS BE REDUCED TO ONE FUNCTION FOR SUCCESS AND FAILURE?
taskController.post('/api/task/failed', (req, res) => {
  const { profile, _id } = req.user;
  const count = req.body[1];
  const task_id = req.body[0]._id;
  const taskType = req.body[0].taskType;

  Profile.findById(profile)
    .exec((err, foundProfile) => {
      const track_id = foundProfile.tracks[0]
      // console.log('TRACK ID', track_id)
      const newCompletion = new Completion({
        count,
        task_id,
        track_id,
        user_id: _id,
        taskType,
        completed: false
      })

      // console.log('COMPLETION CREATED', newCompletion)
      newCompletion.save((err, completion) => {
        if (err) { console.log(err) }
        // console.log('Poll option created!', completion)
        res.send('Task failed')
      })
    })
})

// Executed on user marking task as completed
taskController.post('/api/task/completed', (req, res) => {
  const { profile, _id } = req.user;
  const count = req.body[1];
  const task_id = req.body[0]._id;
  const taskType = req.body[0].taskType;

  Profile.findById(profile)
    .exec((err, foundProfile) => {
      const track_id = foundProfile.tracks[0]
      const newCompletion = new Completion({
        count,
        task_id,
        track_id,
        user_id: _id,
        taskType,
        completed: true
      })

      newCompletion.save((err, completion) => {
        if (err) { console.log(err) }
        res.send('Task completed!')
      })
    })
})

module.exports = taskController;
