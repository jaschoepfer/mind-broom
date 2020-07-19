import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders header', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/sweep your mind/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders trash reminder', () => {
  const { getByText } = render(<App />);
  const trashTodoElement = getByText(/take out trash/i);
  expect(trashTodoElement).toBeInTheDocument();
});
