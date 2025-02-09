import React, { Suspense } from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { LoadingScreen } from './components/LoadingScreen';

// Lazy load components
const Navbar = React.lazy(() => import('./components/Navbar'));
const HeroSection = React.lazy(() => import('./components/Hero'));
const VehicleSection = React.lazy(() => import('./components/VehicleSection'));
const ContactSection = React.lazy(() => import('./components/ContactSection'));
const Footer = React.lazy(() => import('./components/Footer'));

function App() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <div className="relative">
        <Navbar />
        <main id="main-content" aria-live="polite">
          <HeroSection />
          <VehicleSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </Suspense>
  );
}

export default App;
