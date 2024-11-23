import React from "react";
import { BackgroundBeams } from "./beams";

const Footer = () => {
  return (
    <div className=" w-full  bg-green-100 relative flex flex-col items-center justify-center antialiased">
    <footer className=" text-gray-700 border-t-2 z-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Get in Touch */}
        <div>
          <h3 className="font-bold text-lg mb-4 text-gray-900">GET IN TOUCH</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="text-yellow-500 text-xl mr-2">🏠</span>
              <span>
                Plot Number 48, Subhash Nagar Rd, opposite Bus Stand, Naik
                Layout, Parsodi, Trimurtee Nagar, Nagpur, Maharashtra 440022
              </span>
            </li>
            <li className="flex items-center">
              <span className="text-yellow-500 text-xl mr-2">📞</span>
              <a
                href="tel:+919307667930"
                className="hover:text-green-600 transition duration-200"
              >
                +91 9307667930
              </a>
            </li>
            <li className="flex items-center">
              <span className="text-yellow-500 text-xl mr-2">📞</span>
              <a
                href="tel:+919325859861"
                className="hover:text-green-600 transition duration-200"
              >
                +91 9325859861
              </a>
            </li>
            <li className="flex items-center">
              <span className="text-yellow-500 text-xl mr-2">✉️</span>
              <a
                href="mailto:dccservicesnagpur@gmail.com"
                className="hover:text-green-600 transition duration-200"
              >
                dccservicesnagpur@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Domains */}
        <div>
          <h3 className="font-bold text-lg mb-4 text-gray-900">DOMAINS</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="text-yellow-500 text-lg mr-2">➤</span>
              <a
                href={"/domestic-services"}
                className="hover:text-green-600 transition duration-200"
              >
                Domestic Services
              </a>
            </li>
            <li className="flex items-center">
              <span className="text-yellow-500 text-lg mr-2">➤</span>
              <a
                href={"/corporate-services"}
                className="hover:text-green-600 transition duration-200"
              >
                Corporate Services
              </a>
            </li>
            <li className="flex items-center">
              <span className="text-yellow-500 text-lg mr-2">➤</span>
              <a
                href={"/commercial-services"}
                className="hover:text-green-600 transition duration-200"
              >
                Commercial Services
              </a>
            </li>
          </ul>
        </div>

        {/* Domestic Services */}
        <div>
          <h3 className="font-bold text-lg mb-4 text-gray-900">DOMESTIC SERVICES</h3>
          <ul className="space-y-2">
            {[
              "Maid",
              "Cook",
              "Baby Sitter",
              "Japa Maid",
              "Driver",
              "Patient Care",
              "Elderly Care",
            ].map((service, index) => (
              <li key={index} className="flex items-center">
                <span className="text-yellow-500 text-lg mr-2">➤</span>
                <a
                  href={"/domestic-services"}
                  className="hover:text-green-600 transition duration-200"
                >
                  {service}
                </a>
              </li>
            ))}
          </ul>
          {/* COMMERCIAL Services */}
          <h3 className="font-bold text-lg mb-4 mt-4 text-gray-900">COMMERCIAL SERVICES</h3>
          <ul className="space-y-2">
            {[
              "Office Boy",
              "House Keeping",
              "Security Guard",
              "Home Nurse",
            ].map((service, index) => (
              <li key={index} className="flex items-center">
                <span className="text-yellow-500 text-lg mr-2">➤</span>
                <a
                  href={"commercial-services"}
                  className="hover:text-green-600 transition duration-200"
                >
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>


        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-4 text-gray-900">QUICK LINKS</h3>
          <ul className="space-y-2">
            {[
              { name: "Home", link: "/" },
              { name: "Gallary", link: "/gallary" },
              { name: "About Us", link: "/about-us" },
              { name: "Contact Us", link: "/contact-us" },
            ].map((item, index) => (
              <li key={index} className="flex items-center">
                <span className="text-yellow-500 text-lg mr-2">➤</span>
                <a
                  href={item.link}
                  className="hover:text-green-600 transition duration-200"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Privacy Policy and Terms */}
      <div className="text-center text-gray-500 py-4 border-t border-gray-200">
        <div className="space-x-4">
          <a
            href="/privacy-policy"
            className="hover:text-green-600 transition duration-200"
          >
            Privacy Policy
          </a>
          <span>|</span>
          <a
            href="/terms-and-conditions"
            className="hover:text-green-600 transition duration-200"
          >
            Terms & Conditions
          </a>
        </div>
        <p className="mt-2">© 2025 DCC Services. All rights reserved.</p>
      </div>
    </footer>
    <BackgroundBeams />
    </div>
  );
};

export default Footer;
