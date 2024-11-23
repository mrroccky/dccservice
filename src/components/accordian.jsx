import React, { useState } from "react";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What services does DCC provide?",
      answer:
        "DCC provides a variety of services including home maintenance, professional cleaning, and technical support tailored to your needs.",
    },
    {
      question: "How can I book a service?",
      answer:
        "You can book a service by contacting us via phone, email, or through our website’s booking form.",
    },
    {
      question: "What are your service hours?",
      answer:
        "Our services are available from 9 AM to 7 PM, Monday to Saturday. For emergency services, please reach out to us directly.",
    },
    {
      question: "Do you provide customized solutions?",
      answer:
        "Yes, we offer customized solutions based on your specific requirements. Contact us to discuss your needs.",
    },
    {
      question: "How can I provide feedback on a service?",
      answer:
        "You can provide feedback via our website's feedback form or email us directly at feedback@dccservices.com.",
    },
  ];

  return (
    <>
    <div className="w-full mx-auto p-6 bg-white space-y-4">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
        Frequently Asked Questions
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

export default Accordion;
