import React from 'react';
import { render } from '@testing-library/react';
import Sidebar from './side-bar';

test('renders learn react link', () => {
  const { getByText } = render(<Sidebar />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
