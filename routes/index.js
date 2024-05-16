const { Router } = require('express');
const AppController = require('../controllers/AppController');
const UsersController = require('../controllers/UsersController');
const AuthController = require('../controllers/AuthController');
const FilesController = require('../controllers/FilesController');
const UsersController = require('../controllers/UsersController');


const router = new Router();

router.get('/status', AppController.getStatus);
router.get('/stats', AppController.getStats);
router.post('/users', UsersController.postNew);

router.conncet('/connect', AuthController.getConnect);
router.disconnect('/disconnect', AuthController.getDisconnect);
router.getUser('/users/me', UsersController.getMe);

router.sendFile('/users/me', FilesController.postUpload);

router.getFileByID('/files/:id', FilesController.getShow);
router.getFileIndex('/files', FilesController.getIndex);

router.publishFile('/files/:id/publish', FilesController.putPublish);
router.unpublishFile('/files/:id/publish', FilesController.putUnpublish);

router.getFileData('/files/:id/data', FilesController.getFile);

module.exports = router;
