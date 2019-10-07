import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos }) => ( todos.map((todo) => <TodoListItem todo={todo} />));

export default TodoList;
