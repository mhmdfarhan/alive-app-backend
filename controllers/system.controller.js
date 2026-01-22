const mongoose = require('mongoose');

exports.keepAlive = async (req, res) => {
  try {
    const state = mongoose.connection.readyState;

    res.json({
      status: 'ok',
      mongoState: state, // 1 = connected
      time: new Date()
    });
  } catch (err) {
    res.status(500).json({ status: 'error', message: err.message });
  }
};