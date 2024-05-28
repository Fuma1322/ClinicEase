import Accordion from '@/components/Frontend/FAQ'
import Footer from '@/components/Frontend/Footer'
import Hero from '@/components/Frontend/Hero'
import Navbar from '@/components/Frontend/Navbar'
import React, { ReactNode } from 'react'

export default function Layout({children}:{children:ReactNode}) {
  return (
    <div className='bg-black'>
    <Navbar />
    <Hero />
    <div className='mt-60px'>{children}</div>
    <Accordion />
    <Footer />
    </div>
  )
}
