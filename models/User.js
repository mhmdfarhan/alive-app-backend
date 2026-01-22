const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  lastCheckIn: { type: Date, default: Date.now },
  checkInInterval: { type: Number, default: 24 }, // Dalam jam
  emergencyEmail: { type: String, required: true },
  isAlive: { type: Boolean, default: true }
});

module.exports = mongoose.model('User', UserSchema);