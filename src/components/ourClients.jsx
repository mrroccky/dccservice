import React, { useRef, useEffect } from "react";

const OUrClients = () => {
  const carouselRef = useRef(null);
  let isDragging = false;
  let startPosition = 0;
  let scrollLeft = 0;

  useEffect(() => {
    const carousel = carouselRef.current;

    const autoSlide = () => {
      if (!carousel) return;
      carousel.scrollLeft += 1; // Incremental scroll for auto-slide

      if (carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth) {
        carousel.scrollLeft = 0; // Loop back to the start
      }
    };

    const interval = setInterval(autoSlide, 20); // Adjust speed
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  const handleMouseDown = (e) => {
    isDragging = true;
    startPosition = e.pageX - carouselRef.current.offsetLeft;
    scrollLeft = carouselRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startPosition) * 2; // Drag speed
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => {
    isDragging = false;
  };

  const logos = [
    "companies/dinshaw.png",
    "companies/galaxy.png",
    "companies/haldiram.png",
    "companies/indiragandhi.png",
    "companies/mahindralogistics.png",
    "companies/orange.png",
    "companies/transrail.png",
    
  ];

  return (
    <div className="bg-white py-10">
      <div className="bg-white p-2 mt-1 flex flex-col justify-center items-center font-sans">
      <h1 className="text-center font-bold text-2xl mt-5 mb-5 text-black">
      OUR CLIENTS
      </h1>
      </div>
      <div
        className="relative flex overflow-hidden"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
        ref={carouselRef}
      >
        <div className="flex space-x-4 transition-transform duration-300">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="w-36 h-36 flex items-center justify-center bg-white rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-300"
            >
              <img src={logo} alt={`Logo ${index + 1}`} className="w-24 h-24" />
            </div>
          ))}
          {logos.map((logo, index) => (
            <div
              key={`clone-${index}`}
              className="w-36 h-36 flex items-center justify-center bg-white rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-300"
            >
              <img src={logo} alt={`Logo Clone ${index + 1}`} className="w-24 h-24" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OUrClients;
