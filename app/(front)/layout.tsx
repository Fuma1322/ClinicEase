import Footer from '@/components/Frontend/Footer'
import Navbar from '@/components/Frontend/Navbar'
import { SiteHeader } from '@/components/site-header'
import React, { ReactNode } from 'react'

export default function Layout({children}:{children:ReactNode}) {
  return (
    <div className='bg-black'>
     <SiteHeader />
    {children}
    <Footer/>
    </div>
  )
}
