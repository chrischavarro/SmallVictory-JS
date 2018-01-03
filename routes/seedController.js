const express = require('express');
const seedController = express.Router();
const Tag = require('../models/Tag');
const Track = require('../models/Track');

 seedController.get('/seed/tags', (req, res) => {
   console.log('Pre seed');
  const tags = [
    { name: 'Foreign Languages' },
    { name: 'Business' },
    { name: 'Hustling' },
    { name: 'Running' },
    { name: 'Swimming' },
    { name: 'Lifting' }
  ];

  // tags.map((tag) => {
  //   var newTag = new Tag()
  // })
  for (tag of tags) {
    const newTag = new Tag(tag);
    newTag.save()
  }
  console.log('Seeded!');
  res.send('Seeded!')
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
  console.log('Seeded tags!');
  res.send('Seeded!');
})


module.exports = seedController;
