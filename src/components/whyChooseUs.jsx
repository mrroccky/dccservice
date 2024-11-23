"use client";

import React, { useEffect, useState } from "react";

const statsData = [
  { title: "Candidate", endNumber: 5000, icon: "💼" },
  { title: "Customers", endNumber: 1000, icon: "👤" },
  { title: "Cities", endNumber: 50, icon: "📍" },
  { title: "States", endNumber: 10, icon: "🗺️" },
];

export default function WhyChooseUs() {
  const [stats, setStats] = useState(statsData.map((stat) => ({ ...stat, currentNumber: 0 })));

  useEffect(() => {
    const animateNumbers = (index, start, end) => {
      const duration = 1500; // Animation duration in ms
      const stepTime = 50; // Interval time in ms
      const steps = duration / stepTime;
      const increment = Math.ceil((end - start) / steps);

      let current = start;
      const interval = setInterval(() => {
        current += increment;
        if (current >= end) {
          current = end;
          clearInterval(interval);
        }
        setStats((prevStats) =>
          prevStats.map((stat, idx) => (idx === index ? { ...stat, currentNumber: current } : stat))
        );
      }, stepTime);
    };

    statsData.forEach((stat, index) => animateNumbers(index, 0, stat.endNumber));

    const interval = setInterval(() => {
      statsData.forEach((stat, index) => animateNumbers(index, 0, stat.endNumber));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4 bg-gray-50">
      <h2 className="text-2xl font-bold uppercase text-center text-black mb-8">Why Choose Us?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-center transition-transform transform hover:scale-105"
          >
            <div className="text-4xl md:text-5xl font-extrabold text-blue-500 mb-4">{stat.icon}</div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">{stat.title}</h3>
            <p className="text-3xl font-bold text-green-500">{stat.currentNumber}+</p>
          </div>
        ))}
      </div>
    </div>
  );
}
