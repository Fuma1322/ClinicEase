import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AvailabilitySettings from '@/components/Dashboard/Clinic/AvailabilitySettings'


export default function page() {
  return (
   <div className="max-w-5xl mx-auto px-6 py-6">
    <h2 className='scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl pb-4'>Settings</h2>
     <Tabs defaultValue="availability" className="w-[800px]">
  <TabsList>
    <TabsTrigger value="availability">Availability Settings</TabsTrigger>
    <TabsTrigger value="account">Account Settings</TabsTrigger>
  </TabsList>
  <TabsContent value="account">Make changes to your account here.</TabsContent>
  <TabsContent value="availability">
    {/*Availability Form */}
    <AvailabilitySettings/>
  </TabsContent>
</Tabs>
   </div>

  )
}
