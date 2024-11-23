"use client";
import Accordion from '@/components/accordian'
import ContactUs from '@/components/contactUsComponent';
import Footer from '@/components/footer'
import KnowUs from '@/components/knowusComponent'
import Management from '@/components/managment';
import NavigationBar from '@/components/NavigationBar'
import SwiperSlider from '@/components/sliderComponent';
import WhatsAppButton from '@/components/whatsappbtn';
import WhyChooseUs from '@/components/whyChooseUs';
import { NextSeo } from 'next-seo';

import React from 'react'
export default function AboutUs() {
  return (
    <>
    

      <NavigationBar />
      <SwiperSlider />
      <KnowUs />
      <ContactUs />
      <WhyChooseUs />
      <Management />
      <div className="p-2 md:p-12 bg-white">
        {/* Principles Section */}
        <div className="mt-12 mb-4">
          <h2 className="text-2xl font-bold text-center uppercase text-gray-800 mb-8">Our Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Card 1: Improve Work Environment */}
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300 ease-in-out">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Empowering Workforce Efficiency
              </h3>
              <p className="text-gray-600">
                A well-structured work environment not only enhances employee satisfaction but also significantly boosts productivity and operational success.
              </p>
            </div>

            {/* Card 2: Improve Safety */}
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300 ease-in-out">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Prioritizing Workplace Safety</h3>
              <p className="text-gray-600">
                Ensuring a safe and secure environment protects the workforce, fostering trust and stability in daily operations.
              </p>
            </div>

            {/* Card 3: Efficient Maintenance */}
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300 ease-in-out">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Streamlined Operations Management
              </h3>
              <p className="text-gray-600">
                Effective systems and organized processes ensure seamless operations, reducing downtime and optimizing resource utilization.
              </p>
            </div>

            {/* Card 4: Our Quality Policy */}
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300 ease-in-out">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Commitment to Excellence
              </h3>
              <p className="text-gray-600">
                Delivering top-notch manpower solutions through continuous innovation and a focus on maintaining the highest quality standards.
              </p>
            </div>
          </div>
        </div>
        {/* Vision and Mission Section */}
        <div className="max-w-6xl mb-6 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300 ease-in-out">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h2>
            <p className="text-gray-600">
              To revolutionize the workforce industry by bridging the gap
              between talent and opportunity, fostering innovation, and driving
              success for businesses across the globe.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300 ease-in-out">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              To provide unparalleled manpower solutions that prioritize quality,
              reliability, and adaptability, empowering businesses to thrive in
              an ever-changing global market.
            </p>
          </div>
        </div>
      </div>
      <Accordion />
      <Footer />
      <WhatsAppButton />
    </>
  );
}



