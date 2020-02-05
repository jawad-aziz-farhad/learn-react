import React from 'react';
import { render } from '@testing-library/react';
import Navbar from './nav-bat';

test('renders learn react link', () => {
  const { getByText } = render(<Navbar />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
