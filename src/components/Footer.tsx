import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-white text-gray-800 py-16 overflow-hidden"> 
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
          {/* Logo Section */}
          <div className="flex justify-center md:justify-start">
            <img src="/image.png" alt="Supreme Group Logo" className="h-16" />
          </div>

          {/* Applications */}
          <div>
            <h3 className="font-semibold text-lg">APPLICATIONS</h3>
            <ul className="mt-4 space-y-2">
              <li>Apparel</li>
              <li>Automotive</li>
              <li>Filtration</li>
              <li>Customised Solutions</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg">COMPANY</h3>
            <ul className="mt-4 space-y-2">
              <li>Innovation</li>
              <li>Global Competency</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* More */}
          <div>
            <h3 className="font-semibold text-lg">MORE</h3>
            <ul className="mt-4 space-y-2">
              <li>Careers</li>
              <li>Privacy Policy</li>
              <li>Terms and Conditions</li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="font-semibold text-lg">FOLLOW US</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:underline">Twitter</a></li>
              <li><a href="#" className="hover:underline">LinkedIn</a></li>
              <li><a href="#" className="hover:underline">Instagram</a></li>
              <li><a href="#" className="hover:underline">Medium</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t pt-6 flex flex-col sm:flex-row justify-between text-sm text-gray-600 text-center md:text-left">
          <p>©2023. All Rights Reserved.</p>
          <p>Supreme House: 110, 16th Road, Chembur, Mumbai – 400071.</p>
        </div>
      </div>

      {/* Background Design - Faint Logo */}
      <div className="absolute bottom-0 right-0  w-[400px] h-[400px] opacity-10">
        <img src="/bgimg.png" alt="Footer Design" className="bg-dark w-full h-full object-contain" />
      </div>
    </footer>
  );
};

export default Footer;
