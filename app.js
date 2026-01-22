const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');

const app = express();

app.use(cors());
app.use(express.json());

// Middleware koneksi DB
app.use(async (req, res, next) => {
  await connectDB();
  next();
});

app.use('/api', require('./routes/user.routes'));
app.use('/api', require('./routes/system.routes'));

module.exports = app;
