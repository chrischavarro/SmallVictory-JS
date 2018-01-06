const express = require('express');
const chartController = express.Router();
const Completion = require('../models/Completion');
const TaskType = require('../models/TaskType');
const Task = require('../models/Task');
const Profile = require('../models/Profile');

chartController.get('/api/chart_data', (req, res) => {
  const userId = req.user._id;
  doughnutLabels = [];
  doughnutData = [];

  Completion.find({ user_id: { $in: userId }})
    .populate('taskType')
    .exec((err, completions) => {
      if (err) { console.log(err) }
      // console.log('COMPLETIONS', completions[0])
      for (let i=0; i < completions.length; i++) {
        console.log('FOR LOOP', completions[i].taskType[0].name)
        if (doughnutLabels.includes(completions[i].taskType[0].name)) {
          console.log('REPEAT COMPLETION')

          // doughnutLabels[i][labell]
        } else {
          var label = completions[i].taskType[0].name
          var unique = {}
          unique[label] = 1
          doughnutLabels.push(unique)
          console.log('INCREMENT TEST', doughnutLabels[i][label] += 1)
        }
      }
      // completions.reverse().forEach((completion) => {
      //   console.log('INITIAL LABEL ARRAY', doughnutLabels)
      //   // console.log('UNIQUE TASK NAME', completion.taskType[0].name)
      //   if (doughnutLabels.includes(completion)) {
      //     console.log('ALREADY TAKEN')
      //
      //   }
      //   else {
      //     var label = completion.taskType[0].name
      //     var unique = {}
      //     unique[label] = 1
      //     // console.log('lABEL', label)
      //     doughnutLabels.push(unique)
      //     console.log(doughnutLabels.indexOf(label))
      //   }
      // })
      console.log('INCREMENT SOLUTION', doughnutLabels[0]['Strength'])
      console.log('END LABEL ARRAY', doughnutLabels)
      res.send(doughnutLabels)
    })
})

module.exports = chartController;
