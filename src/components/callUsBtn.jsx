import React, { useState, useEffect } from "react";

const  CallUsBtn = () => {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsHovered((prev) => !prev); // Toggle hover state every 4 seconds
    }, 4000); // 4 seconds for each cycle

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="relative inline-block group">
      <button
        className={`relative py-3 px-6 rounded-full text-white font-bold border-2 border-transparent group-hover:border-indigo-600 transition-all duration-100 ease-in overflow-hidden`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        
      >
        <span
          className={`absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 transform transition-all duration-100 ease-in ${
            isHovered ? "scale-125 opacity-100" : "scale-100 opacity-70"
          }`}
        ></span>
        <span
          className={`relative transition-all duration-700 ease-in-out ${
            isHovered ? "opacity-100" : "opacity-100"
          }`}
        >
         <a class="sf-icon-telephone e-btn e-link" href="tel:9307667930"> Call Us 9307667930</a>
        </span>
      </button>
    </div>
  );
};

export default CallUsBtn;