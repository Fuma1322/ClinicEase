import Footer from '@/components/Frontend/Footer';
import { SiteHeader } from '@/components/Frontend/site-header'
import React, { ReactNode } from 'react'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

export default async function Layout({children}:{children:ReactNode}) {
  const session = await getServerSession(authOptions);
  const user = session?.user
  return (
    <div className='bg-black'>
    <SiteHeader session={session} />
      {children}
      <Footer />
    </div>
  )
}
