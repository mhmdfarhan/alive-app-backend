const cron = require('node-cron');
const { checkUserStatus } = require('../services/watchdog.service');

cron.schedule('* * * * *', async () => {
  console.log('🕒 Watchdog running...');
  await checkUserStatus();
});
