import React, { Component } from 'react';

class AddTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: '',
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onChangeHandler({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  onSubmitHandler(e) {
    e.preventDefault();
    const { createTodo } = this.props;
    const { todo } = this.state;
    createTodo(todo);
    this.reinitializeFormState();
  }

  reinitializeFormState() {
    this.setState({
      todo: '',
    });
  }

  render() {
    const { todo } = this.state;
    return (
      <form
        className="row"
        onSubmit={this.onSubmitHandler}
      >
        <input
          className="col s8"
          type="text"
          name="todo"
          value={todo}
          placeholder="Add your thing to do"
          onChange={this.onChangeHandler}
        />
        <button
          className="col offset-s1 s3 btn-large waves-effect waves-light"
          type="submit"
        >
          Add Todo
          <i className="material-icons right">send</i>
        </button>
      </form>
    );
  }
}

export default AddTodo;
