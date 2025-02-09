import { render, screen } from '@testing-library/react';
import { LoadingScreen } from '../components/LoadingScreen';

test('renders loading screen with correct message', () => {
  render(
    <LoadingScreen/>
  );

  // Check if the loading screen is in the document
  const loadingElement = screen.getByRole('status');
  expect(loadingElement).toBeInTheDocument();

  // Check if it contains the correct text
  expect(screen.getByText('Loading, please wait...')).toBeInTheDocument();
});
