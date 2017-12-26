const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  name: String,
  profile: { type: Schema.Types.ObjectId, ref: 'Profile' }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
