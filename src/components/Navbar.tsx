import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setVisible(false); // Hide on scroll down
      } else {
        setVisible(true); // Show on scroll up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-[#F8FCFC] shadow-md py-2 px-6 flex justify-between items-center z-50 transition-transform duration-500 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      {/* Logo */}
      <div className="flex items-center">
        <img src="/image.png" alt="Supreme Group Logo" className="h-10" />
      </div>

      {/* Right-side Buttons */}
      <div className="flex items-center space-x-6">
        <button className="bg-[#6CD8FA] text-black font-medium px-4 py-2 rounded-full hover:bg-[#56C8E6] transition">
          Contact Us
        </button>

        {/* Social Icons */}
        <a href="#" className="text-gray-700 hover:text-black transition">
          <i className="fab fa-linkedin"></i> {/* Replace with actual LinkedIn icon */}
        </a>

        {/* Language Selector */}
        <div className="flex items-center space-x-2 cursor-pointer">
          <i className="fas fa-language"></i> {/* Replace with actual language icon */}
          <span className="text-gray-700 font-medium">ENG</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
