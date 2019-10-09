import React from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import models from '../models';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
    };

    this.createTodo = this.createTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
  }

  componentDidMount() {
    this.getAllTodos();
  }

  getAllTodos() {
    models.todos.get()
      .then((tasks) => {
        this.setState({
          todos: tasks,
        });
      });
  }

  createTodo(todo) {
    models.todos.post({ task: todo })
      .then((newTodo) => {
        const { todos } = this.state;
        const newTodoArr = todos.slice();
        newTodoArr.push(newTodo);
        this.setState({
          todos: newTodoArr,
        });
      });
  }

  updateTodo(task) {
    const newTask = Object.assign({}, task);
    const prompt = window.prompt('Please enter the updated todo:', task.task);
    newTask.task = prompt;
    models.todos.put(newTask._id, newTask)
      .then(() => {
        const { todos } = this.state;
        const newTodoArr = todos.slice();
        const indexOfTodo = newTodoArr.indexOf(task);
        newTodoArr[indexOfTodo] = newTask;
        this.setState({
          todos: newTodoArr,
        });
      });
  }

  deleteTodo(_id) {
    models.todos.delete(_id)
      .then(() => {
        const { todos } = this.state;
        const newTodoArr = todos.slice().filter((todo) => todo._id !== _id);
        this.setState({
          todos: newTodoArr,
        });
      });
  }


  render() {
    const { todos } = this.state;

    return (
      <div className="container">
        <h1>This is a Todo List</h1>
        <div className="divider" />
        <AddTodo createTodo={this.createTodo} />
        <div className="divider" />
        <TodoList
          todos={todos}
          updateTodo={this.updateTodo}
          deleteTodo={this.deleteTodo}
        />
      </div>
    );
  }
}

export default App;
