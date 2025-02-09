import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';

test('renders Footer component correctly', () => {
  render(<Footer />);

  // Check if the logo is present
  const logo = screen.getByAltText('Supreme Group Logo');
  expect(logo).toBeInTheDocument();

  // Check if sections exist
  expect(screen.getByText('Applications')).toBeInTheDocument();
  expect(screen.getByText('Company')).toBeInTheDocument();
  expect(screen.getByText('More')).toBeInTheDocument();
  expect(screen.getByText('Follow Us')).toBeInTheDocument();

  // Check if some links exist
  expect(screen.getByText('Privacy Policy')).toBeInTheDocument();
  expect(screen.getByText('Careers')).toBeInTheDocument();
  expect(screen.getByText('Contact Us')).toBeInTheDocument();

  // Check if copyright text is present
  expect(screen.getByText(/©2023. All Rights Reserved./)).toBeInTheDocument();
});
