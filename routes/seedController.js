const express = require('express');
const seedController = express.Router();
const Tag = require('../models/Tag');

 seedController.get('/seed', (req, res) => {
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

module.exports = seedController;
