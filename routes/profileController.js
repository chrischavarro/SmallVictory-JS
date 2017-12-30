const express = require('express');
const moment = require('moment');
const profileController = express.Router()
const Profile = require('../models/Profile');
const User = require('../models/user');
const Tag = require('../models/Tag');

profileController.post('/api/profile/create', (req, res) => {
  const { phone, time, monday, tuesday, wednesday, thursday, friday, saturday, sunday } = req.body;
  // const user = req.user;
  console.log(req.body)
  // const tag =
  Tag.find()
    .exec((err, tags) => {
      console.log(tags)
    })
  // console.log(tag)
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
  //
  // const userToUpdate = User.findById( user.id )
  // .exec((err, user) => {
  //
  // })
  console.log('New profile', newProfile)
})

module.exports = profileController;
