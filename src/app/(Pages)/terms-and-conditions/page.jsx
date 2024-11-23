"use client"
import React from 'react'
import TermsAndConditionsComponent from "@/components/termsAndConditionsComponent";
import NavigationBar from '@/components/NavigationBar';
import Footer from '@/components/footer';
import WhatsAppButton from '@/components/whatsappbtn';
import { NextSeo } from 'next-seo';


export default function TermsAndConditions() {
  return (
    <div>
     

      {/* <TermsAndConditionsComponent/> */}
      <NavigationBar />
      <TermsAndConditionsComponent />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
