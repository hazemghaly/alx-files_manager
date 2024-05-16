require('dotenv').config('./.env');
const express = require('express');

const app = express();

const hostname = '127.0.0.1';
const port = process.env.PORT || 5000;

['AppController', 'UsersController', 'AuthController', 'FilesController'].forEach((controllerName) => {
  const controller = require(`./controllers/${controllerName}`);
  if (controller.setup) {
    controller.setup(app);
  }
});
app.listen(port, hostname, () => {
  console.log(`Server running on port ${port}`);
});
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

module.exports = app;
