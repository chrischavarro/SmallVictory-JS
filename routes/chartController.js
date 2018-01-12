const express = require('express');
const chartController = express.Router();
const Completion = require('../models/Completion');
const TaskType = require('../models/TaskType');
const Task = require('../models/Task');
const Profile = require('../models/Profile');
const ago = require('ago');

const mapToObj = ( aMap => {
  let obj = {};
  aMap.forEach((v,k) => { obj[k] = v});
  return obj
})

// Try and change forEach to reduce or map
chartController.get('/api/chart_data/:time', (req, res) => {
  const userId = req.user._id;
  const time = req.params.time;
  var doughnutLabels = [];
  var doughnutData = [];
  var searchRange = ago(time, "days")
  Completion.find({ $and: [{ user_id: { $in: userId }}, { createdAt: { $gte: searchRange} } ]})
    .populate('taskType')
    .exec((err, completions) => {
      if (err) { console.log(err) }
      // completions.sort((a,b) => a.taskType.name.localeCompare(b.taskType.name))
      var result = new Map();
      completions.forEach((completion) => {
        var labelName = completion.taskType.name
        if (result.get(labelName)) {
          result.set(labelName, result.get(labelName) + 1)
        } else {
          result.set(labelName, 1)
        }
      })
      doughnutData = mapToObj(result)
      doughnutLabels.push(result.keys())
      // console.log('TASK TYPE RESTRUCTURING TEST', doughnutData)
      res.send(doughnutData)
    })
})

chartController.get('/api/radar_data/:time', (req, res) => {
  const userId = req.user._id;
  const time = req.params.time;
  var searchRange = ago(time, "days");

  Completion.find({ $and: [{ user_id: { $in: userId }}, { createdAt: { $gte: searchRange} } ]})
    .populate('taskType')
    .exec((err, completions) => {
      // completions.sort((a,b) => a.taskType.name.localeCompare(b.taskType.name))
      var completedTasks = completions.filter(completion => completion.completed == true)
      var radarData = []
      var attemptedResult = new Map();
      var completedResult = new Map();

      completedTasks.forEach((completion) => {
        var labelName = completion.taskType.name
        if (completedResult.get(labelName)) {
          completedResult.set(labelName, completedResult.get(labelName) +1)
        } else {
          completedResult.set(labelName, 1)
        }
      })

      completions.forEach((completion) => {
        var labelName = completion.taskType.name
        if (attemptedResult.get(labelName)) {
          attemptedResult.set(labelName, attemptedResult.get(labelName) + 1)
        } else {
          attemptedResult.set(labelName, 1)
        }
      })
      radarData.push(mapToObj(attemptedResult));
      radarData.push(mapToObj(completedResult));
      res.send(radarData)
    })
})


chartController.get('/api/victory_data/:time', (req, res) => {
  const userId = req.user._id;
  const time = req.params.time;
  var searchRange = ago(time, "days");
  // try and select only the task name
  Completion.find({ $and: [{ user_id: { $in: userId }}, { createdAt: { $gte: searchRange} } ]})
    .populate('task_id')
    .exec((err, completions) => {
      var completionNameArray = []
      completions.forEach((completion) => {
        completionNameArray.push(completion.task_id.name)
      })

      var completionMap = new Map();
      completionNameArray.forEach((completionName) => {
        if (completionMap.get(completionName)) {
          completionMap.set(completionName, completionMap.get(completionName) + 1)
        } else {
          completionMap.set(completionName, 1)
        }
      })
      var completionData = mapToObj(completionMap)
      // console.log('COMPLETION DATA', completionData)
      res.send(completionData);
    })
})

chartController.get('/api/rep_data/:time', (req, res) => {
  const userId = req.user._id;
  const time = req.params.time;
  if (process.env.NODE_ENV === 'production') {
    var fitnessTrack = '5a53d1d9a0da030014f428c6'
  } else {
    fitnessTrack = '5a4d09bcf4144cd1267e9865'
  }
  const searchRange = ago(time, "days");

  Completion.find({ $and: [{ user_id: { $in: userId }}, { createdAt: { $gte: searchRange }}, { track_id: fitnessTrack} ]})
    .populate('task_id')
    .exec((err, completions) => {
      // console.log('COMPLETIONS FOUND', completions)
      const repMap = new Map();
      completions.forEach((completion) => {
        let taskName = completion.task_id.name
        let taskCount = completion.count
        if (repMap.get(taskName)) {
          repMap.set(taskName, repMap.get(taskName) + taskCount)
        } else {
          repMap.set(taskName, taskCount)
        }
      })
      var repData = mapToObj(repMap)
      // console.log('REP DATA', repData)
      res.send(repData)
    })
})

module.exports = chartController;
