const express = require('express');
const routes = require('./routes/index');

const app = express();

const hostname = '127.0.0.1';
const port = process.env.PORT || 5000;


app.listen(port, hostname, () => {
    console.log(`Server running on port ${port}`);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);


module.exports = app;