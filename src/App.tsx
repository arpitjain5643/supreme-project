import './App.css'
import HeroSection from './components/Hero';
import Navbar from './components/Navbar'
import "@fortawesome/fontawesome-free/css/all.min.css";
import SecondSection from './components/SecondSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {


  return (
    <>
    <div className="relative">
      <Navbar />
      <HeroSection />
      <SecondSection />
      <ContactSection/>
      <Footer/>
      {/* Additional sections go here */}
    </div>
      
    </>
  )
}

export default App
