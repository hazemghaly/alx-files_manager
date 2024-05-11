// const express = require('express');
// const app = express.Router();
// app.get('/status', setup.create);
// app.get('/stats', setup.create);

// module.exports = app;
const { Router } = require('express');

const router = new Router();

router.route('/status').get((req, res) => {
  res.send({});
});
router.route('/stats').get((req, res) => {
  res.send({});
});

module.exports = router;
