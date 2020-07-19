import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders header', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/sweep your mind/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders TODO items', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/take out trash/i);
  expect(linkElement).toBeInTheDocument();
});
