import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Welcome Screen renders welcome text', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/sweep your mind/i);
  expect(linkElement).toBeInTheDocument();
});
