const express = require('express');
const chartController = express.Router();
const Completion = require('../models/Completion');
const TaskType = require('../models/TaskType');
const Task = require('../models/Task');
const Profile = require('../models/Profile');

chartController.get('/api/chart_data', (req, res) => {
  const userId = req.user._id;
  var doughnutLabels = [];
  var doughnutData = [];
  var labelTest = [];
  var dataTest = [];

  Completion.find({ user_id: { $in: userId }})
    .populate('taskType')
    .exec((err, completions) => {
      if (err) { console.log(err) }
      completions.sort((a,b) => a.taskType[0].name.localeCompare(b.taskType[0].name))
      // completions.reverse().forEach((completion) => {
      //   // console.log(completion.taskType[0].name)
      //   var { name } = completion.taskType[0]
      //   console.log(name)
      //   var i = 1
      //   if (!labelTest.includes(name)) {
      //     labelTest.push(name)
      //     dataTest.push(i)
      //   } else {
      //     i += 1
      //     dataTest.push(i)
      //     console.log('Repeat!')
      //   }
      //   console.log('LABEL TEST', labelTest)
      //   console.log('DATA TEST', dataTest)
      // })

      var result = new Map();
      completions.forEach((completion) => {
        var labelName = completion.taskType[0].name
        if (result.get(labelName)) {
          result.set(labelName, result.get(labelName) + 1)
        } else {
          result.set(labelName, 1)
        }
      })

      const mapToObj = ( aMap => {
        let obj = {};
        aMap.forEach((v,k) => { obj[k] = v});
        return obj
      })

      objResults = mapToObj(result)
      doughnutLabels.push(result.keys())
      res.send(objResults)
    })
})

chartController.get('/api/radar_data', (req, res) => {
  console.log('RADAR CONTROLLER CONTROLLER')
  const userId = req.user._id
  Completion.find({ user_id: { $in: userId }})
    .populate('taskType')
    .exec((err, completions) => {
      completions.sort((a,b) => a.taskType[0].name.localeCompare(b.taskType[0].name))
      var completedTasks = completions.filter(completion => completion.completed == true)
      var radarData = []
      var attemptedResult = new Map();
      var completedResult = new Map();

      completedTasks.forEach((completion) => {
        var labelName = completion.taskType[0].name
        if (completedResult.get(labelName)) {
          completedResult.set(labelName, completedResult.get(labelName) +1)
        } else {
          completedResult.set(labelName, 1)
        }
      })

      completions.forEach((completion) => {
        var labelName = completion.taskType[0].name
        if (attemptedResult.get(labelName)) {
          attemptedResult.set(labelName, attemptedResult.get(labelName) + 1)
        } else {
          attemptedResult.set(labelName, 1)
        }
      })

      const mapToObj = ( aMap => {
        let obj = {};
        aMap.forEach((v,k) => { obj[k] = v});
        return obj
      })
      // console.log('ATTEMPTED RESULT', attemptedResult)
      // console.log('COMPLETED RESULT', completedResult)
      radarData.push(mapToObj(attemptedResult))
      radarData.push(mapToObj(completedResult))
      res.send(radarData)
    })
})

module.exports = chartController;
