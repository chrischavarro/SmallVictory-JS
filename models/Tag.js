const mongoose = require('mongoose');
const { Schema } = mongoose;

const tagSchema = new Schema({
  name: String,
  user: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  track: [{ type: Schema.Types.ObjectId, ref: 'Track' }]
})

const Tag = mongoose.model('Tag', tagSchema)

module.exports = Tag;
