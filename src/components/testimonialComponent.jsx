"use client"
import React from "react";

const testimonials = [
  {
    name: "Rahul Deshmukh",
    designation: "Nagpur Resident",
    img: "client/m1.png",
    bg: "bg-purple-700 bg-pattern-quotation",
    text: "DCC's maid services are truly a blessing!",
    description:
      "I hired a maid from DCC Services for my home in Nagpur. She's efficient, reliable, and trustworthy. It has made managing daily chores so much easier. Highly recommended!",
  },
  {
    name: "Sneha Joshi",
    designation: "Business Owner",
    img: "client/w1.png",
    bg: "bg-gray-700",
    text: "Affordable and dependable driver services!",
    description:
      "Needed a driver for my elderly parents in Nagpur. DCC Services provided a polite, professional driver at a reasonable rate. I'm very satisfied with their service!",
  },
  {
    name: "Suresh Kulkarni",
    designation: "IT Professional",
    img: "client/m2.png",
    bg: "bg-white text-black",
    text: "Excellent patient care for my father!",
    description:
      "DCC’s patient care service is fantastic. The caregiver was kind and professional, making my father’s recovery stress-free. I highly recommend their services!",
  },
  {
    name: "Neha Patil",
    designation: "New Mother",
    img: "client/w2.png",
    bg: "bg-white text-black",
    text: "Great experience with their japa maid service.",
    description:
      "I hired a japa maid through DCC after my baby’s birth. She was caring and experienced, making those early days much easier. Thank you, DCC!",
  },
  {
    name: "Rajesh Kulkarni",
    designation: "Working Professional",
    img: "client/m3.png",
    bg: "bg-gray-100 text-black",
    text: "Reliable driver service at an affordable price.",
    description:
      "DCC Services provided a professional and punctual driver for my daily commute. The experience has been hassle-free, and I couldn’t be happier with the service.",
  },

  {
    name: "Amit Sharma",
    designation: "Restaurant Manager",
    img: "client/m4.png",
    bg: "bg-gray-900",
    text: "Professional housekeeping services!",
    description:
      "We’ve been using DCC’s housekeeping staff for our restaurant in Nagpur. They’re punctual, thorough, and always maintain high standards. Great service at a great price!",
  },
];


const TestimonialComponent = () => {
  return (
    <>
      <div className="text-center justify-center bg-white">
        <h1 className="text-center font-extrabold text-2xl mt-5 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
          
        </h1>
      </div>
      <div className="min-h-screen flex items-center justify-center bg-white p-4 pt-0">
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 w-full max-w-6xl">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`relative p-6 rounded-xl shadow-lg transition-all duration-300 transform hover:shadow-2xl hover:scale-105 ${testimonial.bg} ${
                index === 0 || index === testimonials.length - 1
                  ? "lg:col-span-2 lg:row-span-1"
                  : ""
              }`}
            >
              {/* Shine Effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              
              <div className="flex items-center mb-4 relative z-10">
                <div className="w-12 h-12 mr-4 rounded-full border-2 border-white overflow-hidden">
                  <img
                    src={testimonial.img}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-lg">{testimonial.name}</p>
                  <p className="text-sm opacity-70">{testimonial.designation}</p>
                </div>
              </div>
              <h4 className="text-lg font-bold mb-3 relative z-10">
                {testimonial.text}
              </h4>
              <p className="text-sm leading-relaxed opacity-80 relative z-10">
                {testimonial.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TestimonialComponent;
