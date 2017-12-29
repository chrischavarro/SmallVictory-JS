const mongoose = require('mongoose');
const { Schema } = mongoose;

const trackSchema = new Schema({
  name: String,
  description: String,
  tags: [{ type: Schema.Types.ObjectId, ref: 'Tag' }]
})

const Track = mongoose.model('Track', trackSchema)

module.exports = Track;
