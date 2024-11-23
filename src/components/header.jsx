import React from "react";

const Header = () => {
  return (
    <header className="bg-green-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="logo.png" // Replace with the actual path to your logo image
            alt="HexaBuddy Logo"
            className="h-12 w-auto"
          />
        </div>

        {/* Navigation */}
        <nav className="flex items-center space-x-8">
          <a
            href="#for-home"
            className="text-green-700 font-semibold hover:underline"
          >
            For Home
          </a>
          <a
            href="#for-business"
            className="text-gray-900 hover:text-green-700 font-medium"
          >
            For Business
          </a>
          <a
            href="#about-us"
            className="text-gray-900 hover:text-green-700 font-medium"
          >
            About Us
          </a>
          <a
            href="#contact-us"
            className="text-gray-900 hover:text-green-700 font-medium"
          >
            Contact Us
          </a>
          <a
            href="#pay-your-buddy"
            className="text-gray-900 hover:text-green-700 font-medium"
          >
            Pay Your Buddy
          </a>
          <a
            href="#my-account"
            className="text-gray-900 hover:text-green-700 font-medium"
          >
            My Account
          </a>
        </nav>

        {/* Refer Maid Button */}
        <div>
          <a
            href="#refer-maid"
            className="bg-black text-white py-2 px-4 rounded-lg shadow hover:bg-gray-800"
          >
            REFER MAID
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
