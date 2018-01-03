const mongoose = require('mongoose');
const { Schema } = mongoose;

const completionSchema = new Schema({
  count: Number,
  task_id: { type: Schema.Types.ObjectId, ref: 'Task' },
  track_id: { type: Schema.Types.ObjectId, ref: 'Track' },
  user_id: { type: Schema.Types.ObjectId, ref: 'User' },
  completed: Boolean
})

const Completion = mongoose.model('Completion', completionSchema);

module.exports = Completion;
