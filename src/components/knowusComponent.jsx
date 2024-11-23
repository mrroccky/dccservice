import React from 'react';
import { FaFacebookF, FaWhatsapp, FaLinkedinIn } from 'react-icons/fa';
const KnowUs = () => {
    return (
        <div className="relative w-full bg-cover bg-center bg-white">
            <div className="absolute inset-0 "></div> {/* Optional: Add dark overlay over background */}
            <div className="relative z-10 flex w-full h-full  flex-col md:flex-row">
                {/* Left Section - 4 Images in Grid (2x2) */}
                <div className="w-full md:w-1/2 grid grid-cols-2 gap-2 p-6 md:p-10">
                    <div className="w-full h-[10rem] flex items-center justify-center rounded-lg shadow-lg overflow-hidden ">
                        <img
                            src="/dccimg/japababy.png"
                            alt="Japa Maid Services By DCC nagpur 1"
                            className="w-full h-[10rem] object-contain"
                        />
                    </div>
                    <div className="w-full h-[10rem] flex items-center justify-center rounded-lg shadow-lg overflow-hidden">
                        <img
                            src="/dccimg/driver.png"
                            alt="driver services by dcc servics bagpur"
                            className="w-fullh-[10rem] object-contain"
                        />
                    </div>
                    <div className="w-full h-[10rem] flex items-center justify-center rounded-lg shadow-lg overflow-hidden">
                        <img
                            src="/dccimg/security.png"
                            alt="dcc security gaurd services "
                            className="w-full h-full object-contain"
                        />
                    </div>
                    <div className="w-full h-[10rem] flex items-center justify-center rounded-lg shadow-lg overflow-hidden">
                        <img
                            src="/dccimg/cleaning.png"
                            alt="dcc clining services"
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>

                {/* Right Section - Title, Description, and Icons */}
                <div className="w-full md:w-1/2  text-black text-center flex flex-col items-center justify-center space-y-6">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                        WELCOME TO DCC SERVICES
                    </h1>
                    <p className="text-2xl font-semibold">
                        The Trusted Source for All Your Manpower Needs
                    </p>
                    <p className="text-lg">
                        "DCC Services Nagpur provides expert manpower supply for Domestic, Corporate, and Commercial sectors. We deliver services on time, without delay, ensuring quality, reliability, and seamless support tailored to your needs."
                    </p>
                    <div className="flex justify-center space-x-6 pb-10">
                        {/* Facebook Icon */}
                        <div
                            className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700 cursor-pointer"
                            onClick={() => window.open('https://www.facebook.com/people/DCC-Services/61554592329319/', '_blank')}
                        >
                            <FaFacebookF className="text-white text-xl" />
                        </div>

                        {/* WhatsApp Icon */}
                        <div
                            className="w-12 h-12 flex items-center justify-center rounded-full bg-green-600 hover:bg-green-700 cursor-pointer"
                            onClick={() => window.open('https://wa.me/+919307667930', '_blank')}
                        >
                            <FaWhatsapp className="text-white text-xl" />
                        </div>

                        {/* LinkedIn Icon */}
                        <div
                            className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-800 hover:bg-blue-900 cursor-pointer"
                            onClick={() => window.open('https://www.linkedin.com/in/dcc-services-nagpur-858ab72a3/', '_blank')}
                        >
                            <FaLinkedinIn className="text-white text-xl" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default KnowUs;
