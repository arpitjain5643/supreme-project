import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from '../components/Navbar';
import '@testing-library/jest-dom'; // For matchers like toBeInTheDocument

describe('Navbar Component', () => {
  test('renders the Navbar with essential elements', () => {
    render(<Navbar />);

    // Navbar should be in the document
    const navbar = screen.getByRole('navigation');
    expect(navbar).toBeInTheDocument();

    // Check if logo is present
    const logo = screen.getByAltText('Supreme Group Logo');
    expect(logo).toBeInTheDocument();

    // Check if Contact Us button is present
    const contactButton = screen.getByRole('button', { name: /contact us/i });
    expect(contactButton).toBeInTheDocument();

    // Check if language selector is present
    const languageSelector = screen.getByText('ENG');
    expect(languageSelector).toBeInTheDocument();
  });

  test('Navbar hides on scroll down and shows on scroll up', () => {
    render(<Navbar />);

    const navbar = screen.getByRole('navigation');

    // Initially, Navbar should be visible
    expect(navbar).toHaveClass('translate-y-0');

    // Simulate scrolling down
    fireEvent.scroll(window, { target: { scrollY: 100 } });
    expect(navbar).toHaveClass('-translate-y-full'); // Navbar should be hidden

    // Simulate scrolling up
    fireEvent.scroll(window, { target: { scrollY: 50 } });
    expect(navbar).toHaveClass('translate-y-0'); // Navbar should be visible again
  });
});
