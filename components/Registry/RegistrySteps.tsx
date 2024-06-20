"use client"

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation'
import React from 'react'
import BasicInfo from './BasicInfoForm';
import ClinicDetails from './ClinicDetailsForm';


export default function RegistrySteps({ id }:{ id: string }) {
    const params = useSearchParams();
    const page = params.get("page")?? "basic";
    console.log(page)
    const deeds = [
        {
            userId: { id },
            title: "Basic Information",
            page: "basic",
            components: <BasicInfo title="Basic Info" description="Please Fill In The Clinic Basic Info" page={page} nextPage="details" userId={id}/>,
        },
        {
            title: "Clinic Details",
            page: "details",
            components: <ClinicDetails page={page} title="Clinic Details" description="Please Fill In The Clinic Details"/>
        },
    ] 
    const currentDeed = deeds.find((step) =>step.page === page)
    console.log(currentDeed)
  return (
    <div className=''>
    <div className='grid grid-cols-12 rounded-lg shadow-inner border border-gray-700 overflow-hidden bg-black min-h-screen'>
        <div className='col-span-full sm:col-span-3 divide-y-2 divide-gray-500'>
            {
                deeds.map((step,i) => {
                    return (
                        <Link key={i}
                        href={`/registry/${id}?page=${step.page}`} 
                        className={cn("block shadow-inner py-4 px-4 bg-black text-sky-400 font-extrabold text-sm uppercase", step.page===page?"bg-black-100 text-gray-400":"")}>
                            {step.title}
                        </Link>            
                    )
                })
            }
        </div>
        <div className='col-span-full sm:col-span-9 bg-neutral-950 p-4'>
            {
                currentDeed?.components
            }
        </div>
    </div>
    </div>
  )
}
