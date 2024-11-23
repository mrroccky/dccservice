"use client";
import React from "react";
import { FaFacebookF, FaWhatsapp, FaLinkedinIn } from 'react-icons/fa';
import { BackgroundBeams } from "./beams";

export default function Management() {
  return (
    (<div
      className="h-[40rem] w-full  bg-white relative flex flex-col items-center justify-center antialiased z-50">
       <div className="max-w-sm mx-auto text-center p-6">
        {/* Header */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6">DCC MANAGEMENT DESK</h2>

        {/* Image */}
        <div className="relative w-80 h-80 mx-auto rounded-full overflow-hidden border-4 z-50">
          <img
            src="/dccimg/dccceo.png" // Replace with the actual image path
            alt="Sourabh Chankapure"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name and Role */}
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-gray-800">Sourabh Chankapue</h3>
          <p className="text-sm text-gray-600">CEO and Managing Director</p>
        </div>

        {/* Social Media Buttons */}
        <div className="flex justify-center space-x-6 z-50">
                        <div className="flex justify-center space-x-6">
                            {/* Facebook Icon */}
                            <div
                                className=" z-50 w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700 cursor-pointer"
                                onClick={() => window.open('https://www.facebook.com/people/DCC-Services/61554592329319/', '_blank')}
                            >
                                <FaFacebookF className="text-white text-xl" />
                            </div>

                            {/* WhatsApp Icon */}
                            <div
                                className=" z-50 w-12 h-12 flex items-center justify-center rounded-full bg-green-600 hover:bg-green-700 cursor-pointer"
                                onClick={() => window.open('https://wa.me/+919307667930', '_blank')}
                            >
                                <FaWhatsapp className="text-white text-xl" />
                            </div>

                            {/* LinkedIn Icon */}
                            <div
                                className=" z-50 w-12 h-12 flex items-center justify-center rounded-full bg-blue-800 hover:bg-blue-900 cursor-pointer"
                                onClick={() => window.open('https://www.linkedin.com/in/dcc-services-nagpur-858ab72a3/', '_blank')}
                            >
                                <FaLinkedinIn className="text-white text-xl" />
                            </div>
                        </div>
                    </div>
                    
      </div>
      <BackgroundBeams />
    </div>)
  );
}
