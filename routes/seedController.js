const express = require('express');
const seedController = express.Router();
const Tag = require('../models/Tag');
const Track = require('../models/Track');
const TaskType = require('../models/TaskType');
const Task = require('../models/Task');

 seedController.get('/seed/tags', (req, res) => {
  const tags = [
    { name: 'Foreign Languages' },
    { name: 'Business' },
    { name: 'Hustling' },
    { name: 'Running' },
    { name: 'Swimming' },
    { name: 'Lifting' }
  ];

  for (tag of tags) {
    const newTag = new Tag(tag);
    newTag.save()
  }
  res.send('Seeded tags!')
})

seedController.get('/seed/tracks', (req, res) => {
  const tracks = [
    { name: 'Entrepreneurship', tags: ['5a46f5d4acaff4706fa878d3', '5a46f5d4acaff4706fa878d4'], description: 'Everyone wants to be about that hustle life, but not everyone wants to put their whole life into it. We got you covered by getting you up to speed in five minutes a day!' },
    { name: 'Language', tags: ['5a46f5d4acaff4706fa878d2'], description: `Hablas espanol? If you're in Miami, the answer's probably yes. For you dissenters, we can switch you over to the winning team in five minutes a day. Bueeeno.` },
    { name: 'Fitness', tags: ['5a46f5d4acaff4706fa878d6', '5a46f5d4acaff4706fa878d5', '5a46f5d4acaff4706fa878d7'], description: `Not into spending two hours a day at the gym? We're right there with you. For 5 minutes a day, we'll get you closer to your fitness goals a day at a time.` }
  ]

  for (track of tracks) {
    const newTrack = new Track(track);
    newTrack.save()
  }
  res.send('Seeded tracks!');
})

seedController.get('/seed/tasktypes', (req, res) => {
  const taskTypes = [
    { name: 'Aerobic Endurance', track: ['5a4d09bcf4144cd1267e9865'] },
    { name: 'Speed', track: ['5a4d09bcf4144cd1267e9865'] },
    { name: 'Flexibility', track: ['5a4d09bcf4144cd1267e9865'] },
    { name: 'Muscular Endurance', track: ['5a4d09bcf4144cd1267e9865'] },
    { name: 'Strength', track: ['5a4d09bcf4144cd1267e9865'] }
  ]

  for (taskType of taskTypes) {
    const newTaskType = new TaskType(taskType)
    newTaskType.save();
  }
  res.send('Seeded task types!')
})

seedController.get('/seed/tasks', (req, res) => {
  const tasks = [
    { name: 'Sprints', taskType: ['5a4e5559b1be952784ae2d2b'] },
    { name: 'Lunges', taskType: ['5a4e5559b1be952784ae2d2e'] },
    { name: 'Burpees', taskType: ['5a4e5559b1be952784ae2d2a'] },
    { name: 'Jumping Jacks', taskType: ['5a4e5559b1be952784ae2d2a'] },
    { name: 'Situps', taskType: ['5a4e5559b1be952784ae2d2d'] },
    { name: 'Planks', taskType: ['5a4e5559b1be952784ae2d2d'] },
    { name: 'Toe Touches', taskType: ['5a4e5559b1be952784ae2d2c'] },
    { name: 'Hip Flexor Stretches', taskType: ['5a4e5559b1be952784ae2d2c'] },
    { name: 'Pushups', taskType: ['5a4e5559b1be952784ae2d2d'] },
    { name: 'Squats', taskType: ['5a4e5559b1be952784ae2d2e'] }
  ]

  for (task of tasks) {
    const newTask = new Task(task)
    newTask.save()
  }
  res.send('Seeded tasks!');
})

module.exports = seedController;
