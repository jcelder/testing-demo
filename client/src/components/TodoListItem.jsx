import React from 'react';
import moment from 'moment';

const TodoListItem = ({ todo, updateTodo, deleteTodo }) => (
  <div className="collection-item">
    <span className="text">
      {todo.task}
    </span>
    <span className="secondary-content">
      {moment(todo.date).fromNow()}
      <span>
        <i
          onClick={() => updateTodo(todo)}
          className="small material-icons"
        >
          edit
        </i>
        <i
          onClick={() => deleteTodo(todo._id)}
          className="small material-icons"
        >
          check
        </i>
      </span>
    </span>
  </div>
);

export default TodoListItem;
