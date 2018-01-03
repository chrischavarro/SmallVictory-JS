const mongoose = require('mongoose');
const { Schema } = mongoose;

const tagSchema = new Schema({
  name: String
})

const Tag = mongoose.model('Tag', tagSchema)

module.exports = Tag;

// Foreign languages => language
// Business => entrepreneurship
// Hustling => entrepreneurship
// Running => fitness
// Swimming => fitness
// Lifting => fitness
