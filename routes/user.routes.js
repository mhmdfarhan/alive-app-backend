const router = require('express').Router();
const controller = require('../controllers/user.controller');

router.post('/register', controller.register);
router.post('/login', controller.login);
router.post('/checkin', controller.checkIn);
router.get('/users', controller.getUsers);

module.exports = router;
