const mongoose = require('mongoose');
const { Schema } = mongoose;

const taskSchema = new Schema({
  name: String,
  count: Number,
  taskType: [{ type: Schema.Types.ObjectId, ref: 'TaskType' }]
})

const Task = mongoose.model('Task', taskSchema)

module.exports = Task;
