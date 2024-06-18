import CustomButton from '@/components/CustomButton'
import CustomAccordion, { FAQItem } from '@/components/Frontend/CustomAccordion';
import Pricing from '@/components/Frontend/Pricing';
import { Check } from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link'
import { title } from 'process';
import React from 'react'

export default function page() {
  const features = [
    "ClinicEase brings patients to You",
    
    "Integrated clinic not-taking",
    
    "ClinicEase eliminate queues"
  ];
  const steps = [
    "It's free to join with no membership fees or time commitment",
    
    "We help you tailor your offerings to attract new patients",
    
    "Patients can book appointments with you minutes after your profile goes live"
  ];
  const cards = [
    {
      title: " Begin Your Journey",
      description: "Start a new application to join our network of healthcare providers.",
      link: "/",
      linkTitle: "Start a new application"
    },
    {
      title: "Resume Application",
      description: "Continue where you left off and complete your onboarding process",
      link: "/",
      linkTitle: "Continue your application"
    },
    {
      title: "Schedule a Call",
      description: "Arrange a time for a call to finalize your application",
      link: "/",
      linkTitle: "Schedulee a call"
    },
    {
      title: "Track Your Progress",
      description: "Monitor the status of your application and approvals in real-time.",
      link: "/",
      linkTitle: "Check status"
    },
  ];
  const faqs: FAQItem[] =[
    {
      qn: "How do I sign up for ClinicEase",
      ans: <div>
        "You can sign up by visiting our website and click{" "} <CustomButton title='Sign Up' href="/register?role='CLINIC'" className="hover:bg-blue-800"/>{" "} Follow instructions and create account"
      </div>
    },
    {
      qn: "Can I use ClinicEase on multiple devices",
      ans: "Yes, you can access our app fron any device with an internet connection. Simply log in using your credentials",
    },
    {
      qn: "Is my data secure on ClinicEase",
      ans: "Absolutely. We prioritize the security and privacy of your data. Our platform employs industry-standard encryption and security protocols to safeguard your information",
    },
    {
      qn: "Do you offer customer support",
      ans: "Yes, we have a dedicated customer support team available to assist you with any question. You can reach out to us via email or through support portal",
    },
  ]
  return (
    <div className="min-h-screen">
      <section className="py-12 px-4">
        <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2'>
            <div className=''>
            <h2 className="md:text-5xl text-2xl">Register your {" "}
              <span className="text-blue-600 font-semibold">clinic</span> with us for better customer services</h2>
            <p className="py-4">Welcome to ClinicEase, where connecting with patients is made easier than ever before.
              Our platform streamline the process of managing appointments and keeping track of patient records. 
              Join us in revolutionizing the way you interact with your patients and providing top-notch 
              healthcare services.
            </p>
           <CustomButton title="Register Clinic" href="" className=" hover:bg-blue-600"
           />
           <div className='py-6'>
           {
            features.map((feature,i)=>{
              return(
                <p className='flex items-center'>
                  <Check className='w-4 h-4 mr-2 flex-shrink-0 text-blue-500'/>
                  {feature}
                </p>
              )
            })
           }
           </div>
            </div>
            <Image src="/nurse.jpg" alt="nurse" width={1000} height={907} className="w-full" />
        </div>
      </section>
      <section className="py-12 px-4">
        <div className='max-w-6xl gap-8 mx-auto grid grid-cols-1 md:grid-cols-2'>
        <Image src="/nurse.jpg" alt="nurse" width={1000} height={907} className="w-full hidden md:block mr-4"
        />
            <div className=''>
            <h2 className="sm:text-3xl text-2xl">Join {" "}
              <span className="text-blue-600 font-semibold mx-2">ClinicEase</span> today to decrease patient queues
            </h2>
            <div className='py-6'>
           {
            steps.map((feature,i)=>{
              return(
                <p className='flex items-center'>
                  <Check className='w-4 h-4 mr-2 flex-shrink-0 text-blue-500'/>
                  {feature}
                </p>
              )
            })
           }
           </div>
            <div className='grid grid-cols-2 gap-4'>
             {
              cards.map((card,i)=>{
                return (
                  <div key={i} className='bg-blue-900 p-4 rounded-lg shadow-2xl text-center'>
                  <h3 className='text-2xl font-semibold text-white'>
                    {card.title}
                  </h3>
                  <p className='text-gray-200 text-xs py-3'>
                    {card.description}
    
                  </p>
                  <CustomButton title={card.linkTitle} href={card.link} className=" hover:bg-blue-600"
               />
                  </div>
                )
              })
             }
            </div>
            </div>
        </div>
      </section>
      <section className="py-12 px-4">
        <div className='max-w-5xl gap-8 mx-auto'>
             <Pricing/>
        </div>
      </section>
      <section className="py-12 px-4">
        <div className='max-w-2xl gap-8 mx-auto'>
             <CustomAccordion FAQS={faqs} />
        </div>
      </section>
    </div>
  )
}
