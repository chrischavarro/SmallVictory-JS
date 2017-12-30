const express = require('express');
const moment = require('moment');
const profileController = express.Router()
const Profile = require('../models/Profile');
const User = require('../models/user');
const Tag = require('../models/Tag');

const filterTagsFromRequest = (requestBody) => {
  const tags = [];
  Object.keys(requestBody).forEach((bodyKey) => {
    if(bodyKey.indexOf('key-') !== -1) {
      const newKey = bodyKey.replace('key-', '');
      tags.push(newKey);
      delete requestBody[bodyKey];
    }
  });
  requestBody.tags = tags;
  return requestBody
}

profileController.post('/api/profile/create', (req, res) => {
  const { phone, time, monday, tuesday, wednesday, thursday, friday, saturday, sunday } = req.body;
  const profileTags = filterTagsFromRequest(req.body)
  // const user = req.user;
  console.log(req.body)
  console.log(profileTags)
  // const tag =
  // Tag.find()
  //   .exec((err, tags) => {
  //     console.log(tags)
  //   })
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

  profileTags.tags.forEach(function(tag) {
    newProfile.tags.push(tag)
  })
  //
User.findById( user.id )
  .exec((err, user) => {
    user.profile.push(newProfile)
    newProfile.save();
    user.save();
  })
  res.send('Profile created!')
  console.log('New profile', newProfile)
})

module.exports = profileController;
