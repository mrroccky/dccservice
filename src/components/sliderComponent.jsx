import React, { useState, useEffect } from 'react';

const SwiperSlider = () => {
  const images = [
    'sliderimages/slider1.png','sliderimages/slider2.png','sliderimages/slider3.png','sliderimages/slider4.png',
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="relative w-full bg-white  overflow-hidden">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`, // Adjusted for full-width sliding
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className="w-full h-full object-cover flex-shrink-0" // Ensures each image takes full width and height
          />
        ))}
      </div>
    </div>
  );
};

export default SwiperSlider;
