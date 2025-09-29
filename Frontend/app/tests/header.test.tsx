import { render, screen } from '@testing-library/react';
import { Header } from '../header';
import '@testing-library/jest-dom';

test('renders logo image', () => {
  render(<Header />);
  const logo = screen.getByAltText(/mane attraction text/i);
  expect(logo).toBeInTheDocument();
  expect(logo).toHaveAttribute('src', 'logo.png');
});

test('renders all navigation links', () => {
  render(<Header />);
  expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /about us/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /booking/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /login/i })).toBeInTheDocument();
});

test('renders hamburger menu', () => {
  render(<Header />);
  const menu = screen.getByAltText(/menu/i);
  expect(menu).toBeInTheDocument();
  expect(menu).toHaveAttribute('src', 'menu.png');
});
