/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import AddTodo from '../client/src/components/AddTodo';

const mockEventGenerator = (str) => {
  return {
    target: {
      name: 'todo',
      value: str,
    },
    preventDefault: () => {},
  };
};

describe('Unit Tests', () => {
  describe('Render Tests', () => {
    test('it should render a form', () => {
      const wrapper = shallow(<AddTodo createTodo={() => {}} />);

      expect(wrapper.find('form')).toHaveLength(1);
    });
  });

  describe('Unit Interaction Tests', () => {
    describe('onChangeHandler', () => {
      test('it should invoke the correct method when a change event is emitted', () => {
        const mockChangeHandler = jest.fn();
        const wrapper = shallow(<AddTodo createTodo={() => {}} />);
        wrapper.instance().onChangeHandler = mockChangeHandler;
        wrapper.instance().forceUpdate();
        wrapper.find('input').simulate('click');
        expect(mockChangeHandler).toHaveBeenCalled();
      });
      test('it should correctly update the state when a change event is emitted', () => {
        const wrapper = shallow(<AddTodo createTodo={() => {}} />);
        wrapper.find('input').simulate('change', mockEventGenerator('a'));
        expect(wrapper.instance().state.todo).toBe('e');
      });
    });
    describe('onSubmitHandler', () => {
      test('it should invoke the correct method when a submit event is emitted', () => {
        const mockSubmitHandler = jest.fn();
        const wrapper = shallow(<AddTodo createTodo={() => {}} />);
        wrapper.instance().onSubmitHandler = mockSubmitHandler;
        wrapper.instance().forceUpdate();
        wrapper.find('form').simulate('click');
        expect(mockSubmitHandler).toHaveBeenCalled();
      })
    });
  });
});
