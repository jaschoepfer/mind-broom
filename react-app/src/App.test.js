import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('App renders header text', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/sweep your mind/i);
  expect(linkElement).toBeInTheDocument();
});


