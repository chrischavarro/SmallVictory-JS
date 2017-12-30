const mongoose = require('mongoose');
const { Schema } = mongoose;

const profileSchema = new Schema({
  phone: {
    type: String,
    validate: {
      validator: function(v) {
        return /\d{3}-\d{3}-\d{4}/.test(v);
      },
      message: '{VALUE} is not a valid phone number!'
    },
    required: [true, 'Phone number required']
  },
  time: String,
  monday: Boolean,
  tuesday: Boolean,
  wednesday: Boolean,
  thursday: Boolean,
  friday: Boolean,
  saturday: Boolean,
  sunday: Boolean,
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
