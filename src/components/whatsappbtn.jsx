"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const whatsappLink = "https://wa.me/+919307667930"; // Replace with your WhatsApp number

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 bg-green-500 rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:bg-green-600 transition duration-300"
    >
      <FaWhatsapp className="w-8 h-8 text-white" />
    </a>
  );
}
