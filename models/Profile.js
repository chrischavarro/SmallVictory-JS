const mongoose = require('mongoose');
const { Schema } = mongoose;

const profileSchema = new Schema({
  phone: String,
  time: String,
  monday: Boolean,
  tuesday: Boolean,
  wednesday: Boolean,
  thursday: Boolean,
  friday: Boolean,
  saturday: Boolean,
  sunday: Boolean,
  tags: [{ type: Schema.Types.ObjectId, ref: 'Tag' }],
  tracks: [{ type: Schema.Types.ObjectId, ref: 'Track' }]
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
