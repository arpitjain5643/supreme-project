import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-white text-gray-800 py-16 overflow-hidden"> 
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Grid Layout */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left"
          role="contentinfo"
        >
          {/* Logo Section */}
          <div className="flex justify-center md:justify-start">
            <img
              src="/image.png"
              alt="Supreme Group Logo"
              className="h-16"
              loading="lazy"
            />
          </div>

          {/* Applications */}
          <div>
            <h3 className="font-semibold text-lg">Applications</h3>
            <ul className="mt-4 space-y-2">
              <li>Apparel</li>
              <li>Automotive</li>
              <li>Filtration</li>
              <li>Customised Solutions</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>Innovation</li>
              <li>Global Competency</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* More */}
          <div>
            <h3 className="font-semibold text-lg">More</h3>
            <ul className="mt-4 space-y-2">
              <li>Careers</li>
              <li>Privacy Policy</li>
              <li>Terms and Conditions</li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="font-semibold text-lg">Follow Us</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="hover:underline" aria-label="Follow us on Twitter">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline" aria-label="Follow us on LinkedIn">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline" aria-label="Follow us on Instagram">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline" aria-label="Follow us on Medium">
                  Medium
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div
          className="mt-12 border-t pt-6 flex flex-col sm:flex-row justify-between text-sm text-gray-600 text-center md:text-left"
          aria-label="Copyright and Address"
        >
          <p>©2023. All Rights Reserved.</p>
          <p>Supreme House: 110, 16th Road, Chembur, Mumbai – 400071.</p>
        </div>
      </div>

      {/* Background Design - Faint Logo */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] opacity-10">
        <img
          src="/bgimg.png"
          alt="Footer Background Design"
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </div>
    </footer>
  );
};

export default Footer;
