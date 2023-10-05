const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  dateOfBirth: {
    type: Date,
    default: Date.now
  },
  educationQualification: {
    type: String,
    default: 'Not Specified'
  },
  fathersName: {
    type: String,
    default: 'Not Specified'
  },
  mothersName: {
    type: String,
    default: 'Not Specified'
  },
  phoneNumber: {
    type: String,
    default: 'Not Specified'
  },
  address: {
    type: String,
    default: 'Not Specified'
  },
  city: {
    type: String,
    default: 'Not Specified'
  },
  zipCode: {
    type: String,
    default: 'Not Specified'
  }
});

const User = mongoose.model('user', UserSchema);
module.exports = User;
