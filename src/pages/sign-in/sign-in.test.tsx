import React from 'react';
import { render } from '@testing-library/react';
import SignIn from './sign-in';

test('renders learn react link', () => {
  const { getByText } = render(<SignIn />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
