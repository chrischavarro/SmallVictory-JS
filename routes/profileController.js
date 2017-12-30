const express = require('express');
const moment = require('moment');
const profileController = express.Router()
const Profile = require('../models/Profile');

profileController.post('/api/profile/create', (req, res) => {
  const { phone, time, monday, tuesday, wednesday, thursday, friday, saturday, sunday } = req.body;
  console.log(req.body)
  // const newTime = moment(time, "HH:mm")
  // const formattedTime = newTime.format('HH:mm')
  // console.log(s)
  const newProfile = new Profile({
    phone,
    time,
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday,
    sunday
  })
  console.log('New profile', newProfile)
})

module.exports = profileController;
