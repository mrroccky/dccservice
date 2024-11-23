
"use client";
import Accordion from "@/components/accordian";
import Footer from "@/components/footer";
import HowWeWork from "@/components/howWeWork";
import NavigationBar from "@/components/NavigationBar";
import WhatsAppButton from "@/components/whatsappbtn";
import WhyChooseUs from "@/components/whyChooseUs";
import { NextSeo } from "next-seo";
import React from "react";

const services = [
  { title: "Maid", image: "/domestic/maid.png" },
  { title: "Cook", image: "/domestic/cook.png" },
  { title: "Babysitter", image: "/domestic/baby-sitter.png" },
  { title: "Japa Maid", image: "/domestic/japa-maid.png" },
  { title: "Driver", image: "/domestic/driver.png" },
  { title: "Patient Care", image: "/domestic/patient-care.png" },
  { title: "Elderly Care", image: "/domestic/elderly-care.png" },
  { title: "Home Nurce", image: "/domestic/home-nurce.png" },
];

// const services = [
//   { title: "Office Boy", image: "/office-boy.jpg" },
//   { title: "House Keeping", image: "/house-keeping.jpg" },
//   { title: "Security Gaurd", image: "/security-gaurd.jpg" },
//   { title: "Home Nurce", image: "/home-nurce.jpg" },
// ];

export default function DomesticServices() {
  return (

    <>
     

      <NavigationBar />
      <section className="bg-white py-12 px-2">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-black uppercase mb-8">
            Domestic Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Service Image with Hover Effect */}
                <div className="overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-40 w-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                {/* Service Title */}
                <div className="text-center p-4">
                  <h3 className="text-lg font-semibold text-green-800">
                    {service.title}
                  </h3>
                  {/* Book Now Button */}
                  <a href={"/"}>
                    <button className="mt-2 bg-black text-white py-2 px-4 rounded-md text-sm hover:bg-gray-800 transition">
                      Book Now
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <HowWeWork />
      <WhyChooseUs />
      <Accordion />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
