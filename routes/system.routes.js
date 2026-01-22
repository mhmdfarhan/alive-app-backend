const router = require('express').Router();
const { keepAlive } = require('../controllers/system.controller');

router.get('/keep-alive', keepAlive);

module.exports = router;
