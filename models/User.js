const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  name: String,
  profile: { type: Schema.Types.ObjectId, ref: 'Profile' },
  tags: [{ type: Schema.Types.ObjectId, ref: 'Tag' }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;
