const express = require('express');
const routes = require('./routes/index');

const app = express();

const hostname = '127.0.0.1';
const port = process.env.PORT || 5000;


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(routes);

app.listen(port, hostname, () => {
  console.log(`Server running on port ${port}`);
});


module.exports = app;