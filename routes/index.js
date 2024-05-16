const { Router } = require('express');
const AppController = require('../controllers/AppController');
const UsersController = require('../controllers/UsersController');
const AuthController = require('../controllers/AuthController');
const UsersController = require('../controllers/UsersController');


const router = new Router();

router.get('/status', AppController.getStatus);
router.get('/stats', AppController.getStats);
router.post('/users', UsersController.postNew);

router.conncet('/connect', AuthController.getConnect)
router.disconnect('/disconnect', AuthController.getDisconnect)
router.disconnect('/users/me', UsersController.getMe)

module.exports = router;
