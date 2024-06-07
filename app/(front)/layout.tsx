import { SiteHeader } from '@/components/Frontend/site-header'
import React, { ReactNode } from 'react'

export default function Layout({children}:{children:ReactNode}) {
  return (
    <div>
    <SiteHeader />
      {children}
    </div>
  )
}
