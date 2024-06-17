import Footer from '@/components/Frontend/Footer'
import Navbar from '@/components/Frontend/Navbar'
import { SiteHeader } from '@/components/site-header'
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React, { ReactNode } from 'react'

export default async function Layout({children}:{children:ReactNode}) {
  const session = await getServerSession(authOptions);
  return (
    <div className='bg-black'>
     <SiteHeader session={session} />
    {children}
    <Footer/>
    </div>
  )
}
