const models = require('../models');

module.exports = {
  get: (req, res) => {
    res.send('Hello from GET');
  },
  post: (req, res) => {
    res.send('Hello from POST');
  },
  put: (req, res) => {
    res.send('Hello from PUT');
  },
  delete: (req, res) => {
    res.send('Hello from DELETE');
  },
};
