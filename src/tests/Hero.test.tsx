import { render, screen } from '@testing-library/react';
import HeroSection from '../components/Hero'; // Import the component
import '@testing-library/jest-dom'; // For extended matchers

describe('HeroSection Component', () => {
  test('renders the HeroSection component correctly', () => {
    render(<HeroSection />);

    // Check if the header section is present with the correct role
    const banner = screen.getByRole('banner');
    expect(banner).toBeInTheDocument();

    // Check if the main heading is present
    const heading = screen.getByRole('heading', {
      level: 1,
      name: /Soft Trims and NVH Solutions/i,
    });
    expect(heading).toBeInTheDocument();

    // Check if the supporting text elements are present
    expect(screen.getByText(/Performance in motion/i)).toBeInTheDocument();
    expect(screen.getByText(/for seamless rides/i)).toBeInTheDocument();

    // Check if the paragraph has aria-live attribute for accessibility
    const liveText = screen.getByText(/Performance in motion/i);
    expect(liveText).toHaveAttribute('aria-live', 'polite');
  });
});
