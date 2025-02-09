import { render, screen, fireEvent } from '@testing-library/react';
import ContactSection from '../components/ContactSection';

test('renders ContactSection component correctly', () => {
  render(<ContactSection />);

  // Check if key elements exist
  expect(screen.getByText('Get in touch')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Full name')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('E-mail')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Subject')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Message')).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Send' })).toBeInTheDocument();
});

test('fills and submits the form', () => {
  render(<ContactSection />);

  // Get input fields
  const nameInput = screen.getByPlaceholderText('Full name');
  const emailInput = screen.getByPlaceholderText('E-mail');
  const subjectInput = screen.getByPlaceholderText('Subject');
  const messageInput = screen.getByPlaceholderText('Message');
  const submitButton = screen.getByRole('button', { name: 'Send' });

  // Simulate user input
  fireEvent.change(nameInput, { target: { value: 'John Doe' } });
  fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
  fireEvent.change(subjectInput, { target: { value: 'Inquiry' } });
  fireEvent.change(messageInput, { target: { value: 'Hello, this is a test message.' } });

  // Simulate form submission
  fireEvent.click(submitButton);

  // Ensure console logs form data (mock this in a real test)
  expect(nameInput).toHaveValue('John Doe');
  expect(emailInput).toHaveValue('john@example.com');
  expect(subjectInput).toHaveValue('Inquiry');
  expect(messageInput).toHaveValue('Hello, this is a test message.');
});
