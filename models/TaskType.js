const mongoose = require('mongoose');
const { Schema } = mongoose;

const taskTypeSchema = new Schema({
  name: String,
  track: { type: Schema.Types.ObjectId, ref: 'Track' }
})

const TaskType = mongoose.model('TaskType', taskTypeSchema)

module.exports = TaskType;
