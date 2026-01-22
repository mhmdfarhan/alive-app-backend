const User = require('../models/User');

exports.keepAlive = async (req, res) => {
  try {
    // Query ringan (murah)
    await User.findOne().select('_id');

    res.json({
      status: 'ok',
      message: 'MongoDB cluster is awake 🚀',
      time: new Date()
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: err.message
    });
  }
};
