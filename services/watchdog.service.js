const User = require('../models/User');
const { sendEmergencyEmail } = require('./email.service');

async function checkUserStatus() {
  const users = await User.find({ isAlive: true });
  const now = new Date();

  for (const user of users) {
    const diffHours = (now - user.lastCheckIn) / (1000 * 60 * 60);

    if (diffHours > user.checkInInterval) {
      user.isAlive = false;
      await user.save();

      await sendEmergencyEmail(user.name, user.emergencyEmail);
      console.log(`⚠️ ${user.name} tidak merespons`);
    }
  }
}

module.exports = { checkUserStatus };
