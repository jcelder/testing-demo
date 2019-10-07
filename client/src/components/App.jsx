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
  }

  componentDidMount() {
    this.getAllTodos();
  }

  getAllTodos() {
    models.tasks.get()
      .then((tasks) => {
        this.setState({
          todos: tasks,
        });
      });
  }
  

  render() {
    const { todos } = this.state;

    return (
      <div className="container">
        <h1>This is a Todo List</h1>
        <div className="divider" />
        <AddTodo />
        <div className="divider" />
        <TodoList todos={todos} />
      </div>
    );
  }
}

export default App;
