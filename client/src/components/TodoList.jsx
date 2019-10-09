import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos, updateTodo, deleteTodo }) => (
  <div className="collection">
    {todos.map((todo) => (
      <TodoListItem
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
        key={todo._id}
        todo={todo}
      />
    ))}
  </div>
);

export default TodoList;
