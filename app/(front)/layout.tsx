import Navbar from '@/components/Frontend/Navbar'
import React, { ReactNode } from 'react'

export default function Layout({children}:{children:ReactNode}) {
  return (
    <div className='bg-black'>
    <Navbar />
    <div className='mt-80px'>{children}</div>
    </div>
  )
}
