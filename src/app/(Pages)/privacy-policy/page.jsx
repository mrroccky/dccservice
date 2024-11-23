"use client"
import Footer from '@/components/footer'
import NavigationBar from '@/components/NavigationBar'
import PrivacyPolicy from '@/components/privacyPolicy'
import WhatsAppButton from '@/components/whatsappbtn'
import { NextSeo } from 'next-seo'
import React from 'react'

export default function PrivaryPolicy() {
  return (
    <>
      

      <NavigationBar />
      <PrivacyPolicy />
      <Footer />
      <WhatsAppButton />
    </>
  )
}
