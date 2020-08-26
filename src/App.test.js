import React from 'react';
import { render } from '@testing-library/react';
import App, { AppDisplay } from './App';


function mockDatabase(){
  var todos = []
  function showTodos(cb){cb(todos)}
  function addTodo(text){todos.push(text)}
  return {showTodos: showTodos, addTodo: addTodo}
}

test('renders header', () => {
  const db = mockDatabase()
  const { getByText } = render(<AppDisplay db={db}/>);
  const linkElement = getByText(/sweep your mind/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders TODO items', () => {
  const db = mockDatabase()
  db.addTodo('take out trash')
  const { getByText } = render(<AppDisplay db={db}/>);
  const linkElement = getByText(/take out trash/);
  expect(linkElement).toBeInTheDocument();
});
