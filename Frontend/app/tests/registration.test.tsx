import React from 'react'; // Important for JSX in some setups
import { render, screen } from '@testing-library/react';
import { Registration } from '../registration/registration';

beforeEach(() => {
  // Mock global fetch
  // @ts-ignore
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ message: 'Registration successful' }),
    })
  );
});

afterEach(() => {
  jest.resetAllMocks();
});

describe('Registration Component', () => {
  test('renders all input fields', () => {
    render(<Registration />); // JSX works because of import React

    expect(screen.getByPlaceholderText(/Enter First Name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Enter Last Name/i)).toBeInTheDocument();
  });
});
