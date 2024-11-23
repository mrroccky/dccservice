"use client";
import React from 'react'
import Footer from '@/components/footer'
import NavigationBar from '@/components/NavigationBar'
import ContactUsComponent from '@/components/contactUsComponent'
import SwiperSlider from '@/components/sliderComponent';
import ContactForm from '@/components/contactForm';
import WhatsAppButton from '@/components/whatsappbtn';
import { NextSeo } from 'next-seo';

export default function ContactUs() {
  return (
    <>
     
      <NavigationBar />
      <SwiperSlider />
      <ContactForm />
      <ContactUsComponent />
      <Footer />
      <WhatsAppButton />
    </>
  )
}
