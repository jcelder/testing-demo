const Task = require('../../database');

module.exports = {
  create: (task) => Task.create(task),
  read: () => Task.find(),
  update: (id, task) => Task.findByIdAndUpdate(id, task),
  delete: (id) => Task.findByIdAndDelete(id),
};
