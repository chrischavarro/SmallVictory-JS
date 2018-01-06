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
      // console.log('COMPLETIONS', completions[0])
      // for (let i=0; i < completions.length; i++) {
      //   console.log('FOR LOOP', completions[i].taskType[0].name)
      //   if (doughnutLabels.includes(completions[i].taskType[0].name)) {
      //     console.log('REPEAT COMPLETION')
      //
      //     // doughnutLabels[i][labell]
      //   } else {
      //     var label = completions[i].taskType[0].name
      //     var unique = {}
      //     unique[label] = 1
      //     doughnutLabels.push(unique)
      //     console.log('INCREMENT TEST', doughnutLabels[i][label] += 1)
      //   }
      // }
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

      // completions.reverse().forEach((completion) => {
      //   var labelCheck = completion.taskType[0].name
      //   var uniqueCheck = {}
      //   uniqueCheck[labelCheck] = 1
      //   console.log('INITIAL LABEL ARRAY', doughnutLabels)
      //   // console.log('UNIQUE TASK NAME', completion.taskType[0].name)
      //   // if (doughnutLabels.includes(uniqueCheck)) {
      //   //   console.log('ALREADY TAKEN')
      //   // }
      //   // else {
      //     var label = completion.taskType[0].name
      //     var unique = {}
      //     unique[label] = 1
      //     console.log('UNIQUE?', doughnutLabels.includes(unique), doughnutLabels.indexOf(unique))
      //     if (!doughnutLabels.includes(unique)) {
      //       doughnutLabels.push(unique)
      //     } else {
      //       console.log('DUPLICATE')
      //     }
      //     // console.log('TEST', unique)
      //     // console.log(doughnutLabels.indexOf(label))
      //     // console.log(completion.taskType[0].name)
      //     // console.log('KEY TEST', Object.keys(unique))
      //   // }
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
      doughnutLabels.push(result.keys())
      console.log(result.keys())
      console.log('DONUT', doughnutLabels)
      // console.log('INCREMENT SOLUTION', doughnutLabels[0]['Strength'])
      // console.log('END LABEL ARRAY', doughnutLabels)
      // console.log('LABEL KEYS', Object.keys(doughnutLabels))
      res.send(result)
    })
})

module.exports = chartController;
