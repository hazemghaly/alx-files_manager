const { Router } = require('express');
const AppController = require('../controllers/AppController');

const router = new Router();

router.get('/status', AppController.getStatus);
router.get('/stats', AppController.getStats);

module.exports = router;
// const { Router } = require('express');

// const router = new Router();

// router.route('/status').get((req, res) => {
//   res.send({});
// });
// router.route('/stats').get((req, res) => {
//   res.send({});
// });

module.exports = router;
