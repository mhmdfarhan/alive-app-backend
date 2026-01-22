const express = require('express');
const cors = require('cors');

require('./config/database');
require('./jobs/watchdog.cron');

const userRoutes = require('./routes/user.routes');

const systemRoutes = require('./routes/system.routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', userRoutes);

app.use('/api', systemRoutes);

module.exports = app;
