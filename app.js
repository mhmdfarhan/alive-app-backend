const express = require('express');
const cors = require('cors');

require('./config/database');
require('./jobs/watchdog.cron');

const userRoutes = require('./routes/user.routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', userRoutes);

module.exports = app;
