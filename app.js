const express = require('express');
const bodyParser = require('body-parser');

const itemRoutes = require('./routes/itemRoutes');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/', itemRoutes);

module.exports = app;
