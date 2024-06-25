"use client"
import React from 'react'
import { Tabs } from "flowbite-react";
import Monday from './AvailabilityDays/Monday';


export default function AvailabilitySettings() {
    const tabs = [
        {
           title: "Monday",
           component:
           <Monday/>

        },
        {
            title: "Tuesday",
            component:<>Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
         control the content visibility and styling.</> 
         },
         {
            title: "Wednesday",
            component:<>Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
         control the content visibility and styling.</> 
         },
         {
            title: "Thursday",
            component:<>Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
         control the content visibility and styling.</> 
         },
         {
            title: "Friday",
            component:<>Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
         control the content visibility and styling.</> 
         },
         {
            title: "saturday",
            component:<>Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
         control the content visibility and styling.</> 
         },
         {
            title: "Sunday",
            active:false,
            component:<>Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
         control the content visibility and styling.</> 
         },
    ]
  return (
    <div>
        <p className='py-3'>Please Add the Availability for the Whole Week</p>
     {
        tabs.map((tab, i)=>{
            return (
                <Tabs key={i} aria-label="Tabs with underline" style="underline">
                <Tabs.Item active title={tab.title}>
                    {tab.component}
                </Tabs.Item>
              </Tabs>
            );
        })
     }
    </div>
  )
}
