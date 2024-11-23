'use client';

import { useState } from 'react';
import CallUsBtn from './callUsBtn';
function NavigationBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <>
              {/* Navbar container */}
                <nav className="bg-white text-black py-1 px-6  border-b border-gray-300  z-100">
                    <div className="flex justify-between items-center">
                        {/* Logo */}
                        <a href="/" className="block py-2 px-4">

                        <div className="flex items-center">
                            <img src="dccimg/logo.png" width={50} height={50} alt="DCC Services Nagpur Logo" />
                        </div>
                        </a>
                        {/* Hamburger Button (Mobile) */}
                        <button
                            className="lg:hidden block bg-none border-none text-black cursor-pointer"
                            onClick={toggleMenu}
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </button>

                        {/* Nav Links - Desktop */}
                        <ul className="hidden lg:flex space-x-10">
                            <li className=' hover:text-sky-400'><a href="/">Home</a></li>
                            <li className=' hover:text-sky-400'><a href="/gallary">Gallary</a></li>
                            <li className="relative group hover:text-sky-400">
                                <a href="/" className="flex items-center">
                                    Services
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24" height="24" viewBox="0 0 24 24"
                                        className="text-blue-500 hover:text-blue-700 ml-2"
                                    >
                                        <path d="M12 16l-6-6h12l-6 6z" />
                                    </svg>
                                </a>
                                {/* Dropdown Menu */}
                                <div className="absolute left-0 hidden bg-white text-black rounded-lg shadow-lg group-hover:block w-48 z-50">
                                    <a href="/domestic-services" className="block py-2 px-4 hover:bg-blue-500 hover:text-white">Domestic Services</a>
                                    <a href="/corporate-services" className="block py-2 px-4 hover:bg-blue-500 hover:text-white">Corporate Services</a>
                                    <a href="/commercial-services" className="block py-2 px-4 hover:bg-blue-500 hover:text-white">Commercial Services</a>
                                </div>
                            </li>
                            <li className=' hover:text-sky-400'><a href="/about-us">About Us</a></li>
                            <li className=' hover:text-sky-400'><a href="/contact-us">Contact Us</a></li>
                            <CallUsBtn />

                        </ul>
                    </div>

                    {/* Mobile Menu - Conditional Render based on state */}
                    {isMenuOpen && (
                        <ul className="lg:hidden block mt-4 space-y-4 text-center white-black black-white py-4 rounded-md">
                            <li className='hover:bg-sky-500 hover:text-white'><a href="/" className="block py-2">Home</a></li>
                            <li className='hover:bg-sky-500 hover:text-white' ><a href="/gallary" className="block py-2">Gallary</a></li>
                            <li className='hover:bg-sky-500 hover:text-white' ><a href="/about-us" className="block py-2">About Us</a></li>
                            <li className='hover:bg-sky-500 hover:text-white'><a href="/contact-us" className="block py-2">Contact Us</a></li>
                            <li className='hover:bg-sky-500 hover:text-white'><a href="/terms-and-conditions" className="block py-2">Term & Conditions</a></li>
                            <li className='hover:bg-sky-500 hover:text-white'><a href="/privacy-policy" className="block py-2">Privacy Policy</a></li>
                            <li className="relative group hover:bg-sky-500 text-black">
                                <a className="block py-2">
                                    Services
                                </a>
                                {/* Dropdown Menu */}
                                <div className="absolute left-0 hidden bg-white text-black rounded-lg shadow-lg group-hover:block w-48">
                                    <a href="/domestic-services" className="block py-2 px-4 hover:bg-sky-500 hover:text-white">Domestic Services</a>
                                    <a href="/corporate-services" className="block py-2 px-4 hover:bg-sky-500 hover:text-white">Corporate Services</a>
                                    <a href="/commercial-services" className="block py-2 px-4 hover:bg-sky-500 hover:text-white">Commercial Services</a>
                                </div>
                            </li>
                        </ul>
                    )}
                </nav>
        </>     
    );
}

export default NavigationBar;
