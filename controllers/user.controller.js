const User = require('../models/User');
const bcrypt = require('bcrypt');

exports.register = async (req, res) => {
  try {
    const { name, email, emergencyEmail, checkInInterval, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      emergencyEmail,
      checkInInterval: checkInInterval || 24,
      lastCheckIn: new Date(),
      isAlive: true
    });

    res.status(201).json({ message: 'User berhasil terdaftar', data: user });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(404).json({ message: 'User tidak ditemukan' });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: 'Password salah' });

  res.json({
    message: 'Login berhasil',
    user: {
      email: user.email,
      name: user.name,
      interval: user.checkInInterval
    }
  });
};

exports.checkIn = async (req, res) => {
  const { email } = req.body;

  const user = await User.findOneAndUpdate(
    { email },
    { lastCheckIn: new Date(), isAlive: true },
    { new: true }
  );

  res.json({
    message: 'Senang melihat Anda sehat!',
    lastCheckIn: user.lastCheckIn
  });
};

exports.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};
