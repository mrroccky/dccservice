import React, { useState } from "react";

const HowWeWork = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "STEP 1",
      answer:
        "Start by registering with us and providing details of your specific requirements.",
    },
    {
      question: "STEP 2",
      answer:
        "We assist you in shortlisting potential candidates from our extensive database, tailored to your needs.",
    },
    {
      question: "STEP 3",
      answer:
        "You meet the shortlisted candidates to gauge compatibility and make the final selection.",
    },
    {
      question: "STEP 4",
      answer:
        "Once you’ve made your choice, you can begin your journey with your selected candidate and enjoy the benefits of our services.",
    },
    {
      question: "STEP 5",
      answer:
        "If you didn’t find compatibility with our candidates, don’t worry. You are free to ask for a replacement we provide 3 time replacement upto 6 month terms & conditions applicable",
    },
  ];

  return (
    <>
    <div className="w-full mx-auto p-6 bg-white space-y-4">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
        How We Work
      </h2>
      {faqs.map((item, index) => (
        <div
          key={index}
          className={`border rounded-lg ${
            activeIndex === index ? "border-green-500" : "border-gray-200"
          }`}
        >
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full flex justify-between items-center p-4 focus:outline-none"
          >
            <span className="text-lg font-medium text-gray-700">
              {item.question}
            </span>
            <svg
              className={`w-5 h-5 transform transition-transform ${
                activeIndex === index ? "rotate-180" : "rotate-0"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {activeIndex === index && (
            <div className="p-4 text-gray-600 border-t border-gray-200">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
    </>
  );
};

export default HowWeWork;
