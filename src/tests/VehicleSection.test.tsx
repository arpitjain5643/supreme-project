import { render, screen } from '@testing-library/react';
import VehicleSection from '../components/VehicleSection'; // Import the component
import '@testing-library/jest-dom'; // For additional matchers

describe('VehicleSection Component', () => {
    test('renders VehicleSection with Passenger Vehicles active by default', () => {
        render(<VehicleSection />);
        const passengerHeading = screen.getByText('Passenger vehicles');
        const commercialHeading = screen.getByText('Commercial vehicles');
        expect(passengerHeading).toHaveClass('text-lg md:text-xl font-bold text-left'); // Should be active
        expect(commercialHeading).toHaveClass('text-lg md:text-xl font-bold text-left'); // Should be inactive
      });
});
