import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Welcome Screen renders welcome text', () => {
  let { getByText } = render(<App />);
  let linkElement = getByText(/sweep your mind/i);
  expect(linkElement).toBeInTheDocument();
});
