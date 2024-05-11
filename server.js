require('dotenv').config('./.env');
// const setup = require('./controllers/AppController');
const express = require('express');

const app = express();

const hostname = '127.0.0.1';
const port = process.env.PORT || 5000;

['AppController', 'UsersController', 'AuthController', 'FilesController'].forEach((controllerName) => {
  const controller = require(`./controllers/${controllerName}`);
  if (controller.setup) {
    controller.setup(app);
  }
  // eslint error
  // https://github.com/import-js/eslint-plugin-import/issues/895
  // no-dynamic-require cannot be disabled #895
  // return (controller.setup(app));
});
app.listen(port, hostname, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;
// https://stackoverflow.com/questions/36558909/route-get-requires-callback-functions-but-got-a-object-undefined
// https://stackoverflow.com/questions/6140412/how-to-export-all-routes-in-express
// https://stackoverflow.com/questions/73253638/how-to-export-redis-in-nodejs-to-different-routes
