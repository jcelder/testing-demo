/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import TodoList from '../client/src/components/TodoList';
import TodoListItem from '../client/src/components/TodoListItem';

const sampleTodos = [
  {
      "isComplete": false,
      "_id": "5d9e09468c7a401e70198da2",
      "task": "Write one test",
      "date": "2019-10-09T16:22:30.603Z",
      "__v": 0
  },
  {
      "isComplete": false,
      "_id": "5d9e09498c7a401e70198da3",
      "task": "Write another",
      "date": "2019-10-09T16:22:33.932Z",
      "__v": 0
  },
  {
      "isComplete": false,
      "_id": "5d9e09508c7a401e70198da4",
      "task": "Write a unit test!",
      "date": "2019-10-09T16:22:40.075Z",
      "__v": 0
  }
]

test('should render 3 TodoListItem components', () => {
  const wrapper = shallow(
    <TodoList
      todos={sampleTodos}
      updateTodo={() => {}}
      deleteTodo={() => {}}
    />
  );
  expect(wrapper.find(TodoListItem)).toHaveLength(3);
});
