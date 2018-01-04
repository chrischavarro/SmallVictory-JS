const express = require('express');
const taskController = express.Router();
const Task = require('../models/Task');
const TaskType = require('../models/TaskType');

taskController.get('/api/task', (req, res) => {
  console.log('Task controller!')
})

module.exports = taskController;
