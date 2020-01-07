/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import TodoListItem from '../client/src/components/TodoListItem';

const sampleData = {
  "isComplete": false,
  "_id": "5d9e09468c7a401e70198da2",
  "task": "Write one test",
  "date": "2019-10-09T16:22:30.603Z",
  "__v": 0
};
describe('Render Tests', () => {
  test('should render the correct task string', () => {
    const wrapper = shallow(
      <TodoListItem
        todo={sampleData}
        updateTodo={() => {}}
        deleteTodo={() => {}}
      />
    );
    expect(wrapper.find('.text')).toHaveLength(1);
    expect(wrapper.find('.text').text()).toBe('Write one test');
  });
});

describe('updateTodo', () => {
  test('should invoke the updateTodo prop when the edit button is clicked', () => {
    const mockUpdateTodo = jest.fn();
    const wrapper = shallow(
      <TodoListItem
        todo={sampleData}
        updateTodo={mockUpdateTodo}
        deleteTodo={() => {}}
      />
    );
    const updateButton = wrapper.find('i').first();
    updateButton.simulate('click');
    expect(mockUpdateTodo).toHaveBeenCalled();
  });

  test('should invoke the updateTodo prop with the correct arguments when the edit button is clicked', () => {
    const mockUpdateTodo = jest.fn();
    const wrapper = shallow(
      <TodoListItem
        todo={sampleData}
        updateTodo={() => mockUpdateTodo(sampleData)}
        deleteTodo={() => {}}
      />
    );

    const updateButton = wrapper.find('i').first();
    updateButton.simulate('click');
    expect(mockUpdateTodo).toHaveBeenCalledWith(sampleData);
  });
});

describe('deleteTodo', () => {
  test('should invoke the updateTodo prop when the edit button is clicked', () => {
    const mockDeleteTodo = jest.fn();
    const wrapper = shallow(
      <TodoListItem
        todo={sampleData}
        updateTodo={() => {}}
        deleteTodo={mockDeleteTodo}
      />
    );
    const deleteButton = wrapper.find('i').last();
    deleteButton.simulate('click');
    expect(mockDeleteTodo).toHaveBeenCalled();
  });

  test('should invoke the updateTodo prop with the correct arguments when the edit button is clicked', () => {
    const mockDeleteTodo = jest.fn();
    const wrapper = shallow(
      <TodoListItem
        todo={sampleData}
        updateTodo={() => {}}
        deleteTodo={() => mockDeleteTodo(sampleData._id)}
      />
    );

    const deleteButton = wrapper.find('i').last();
    deleteButton.simulate('click');
    expect(mockDeleteTodo).toHaveBeenCalledWith(sampleData._id);
  });
});
