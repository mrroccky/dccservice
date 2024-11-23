"use client"
import Footer from '@/components/footer'
import { GallaryComponent } from '@/components/gallaryComponent'
import NavigationBar from '@/components/NavigationBar'
import WhatsAppButton from '@/components/whatsappbtn'
import { NextSeo } from 'next-seo'
import React from 'react'

export default function page() {
    return (
        <div>
           
            <NavigationBar />
            <GallaryComponent />
            <Footer />
            <WhatsAppButton />
        </div>
    )
}
