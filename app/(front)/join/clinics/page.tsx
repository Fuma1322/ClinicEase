import Hero from '@/components/Clinics/ClinicHero'
import FAQ from '@/components/Clinics/FAQ'
import Footer from '@/components/Frontend/Footer'
import React from 'react'

export default function page() {
  return (
    <div className='bg-black'>
        <Hero />
        <FAQ />
        <Footer />
    </div>
  )
}
