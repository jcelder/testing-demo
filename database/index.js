const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/todos')
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.log(err);
  });

const { Schema } = mongoose;

const taskSchema = new Schema({
  task: String,
  isComplete: { type: Boolean, default: false },
  date: { type: Date, default: Date.now },
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
