"use client";

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center space-y-4">
        {/* Infinity Symbol */}
        <div className="relative w-16 h-8 animate-pulse">
          <div className="absolute inset-0 border-t-4 border-gray-500 rounded-full"></div>
          <div className="absolute inset-0 border-b-4 border-gray-500 rounded-full rotate-90"></div>
        </div>

        {/* Loading Text */}
        <p className="text-gray-500 opacity-50 text-xl animate-bounce">
          Loading...
        </p>
      </div>
    </div>
  );
}
