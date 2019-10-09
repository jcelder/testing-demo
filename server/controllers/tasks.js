const models = require('../models');

module.exports = {
  get: (req, res) => {
    if (req.params.id === undefined) {
      models.tasks.read()
        .then((tasks) => {
          res.send(tasks);
        })
        .catch((err) => {
          console.log(err);
          res.send(500);
        });
    }
  },
  post: (req, res) => {
    const task = req.body;
    models.tasks.create(task)
      .then((data) => {
        res.send(201, data);
      })
      .catch((err) => {
        console.log(err);
        res.send(500);
      });
  },
  put: (req, res) => {
    const { id } = req.params;
    const task = req.body;
    models.tasks.update(id, task)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        console.log(err);
        res.send(500);
      });
  },
  delete: (req, res) => {
    const { id } = req.params;
    models.tasks.delete(id)
      .then(() => res.send(200))
      .catch((err) => {
        console.log(err);
        res.send(500);
      });
  },
};
