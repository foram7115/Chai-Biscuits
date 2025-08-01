import React from "react";
import fbIcon from "../assets/fbIcon.png";
import instaIcon from "../assets/instaIcon.jpg";
import twitterIcon from "../assets/twitterIcon.png";
import logo from "../assets/logo.png"; // Your BrewBites logo

const Footer = () => {
  return (
    <footer className="bg-[#fef5f1] text-black py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Company Info */}
        <div>
          <img src={logo} alt="BrewBites Logo" className="w-24 h-auto mb-4" />
          <p className="text-sm text-gray-700">
            Your one-stop shop for freshly brewed coffee, calming teas, and crunchy snacks. Sip & Snack with love!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Coffee</a></li>
            <li><a href="#" className="hover:underline">Tea</a></li>
            <li><a href="#" className="hover:underline">Snacks</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Customer Service</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">FAQs</a></li>
            <li><a href="#" className="hover:underline">Shipping & Returns</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
          <div className="flex space-x-4 items-center">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={fbIcon} alt="Facebook" className="w-6 h-6 hover:opacity-70" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={instaIcon} alt="Instagram" className="w-6 h-6 hover:opacity-70" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={twitterIcon} alt="Twitter" className="w-6 h-6 hover:opacity-70" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 border-t border-gray-300 pt-4 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} BrewBites. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
