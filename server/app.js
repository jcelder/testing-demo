const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static('public'));

app.use('/api/tasks', routes.tasks);

module.exports = app;
