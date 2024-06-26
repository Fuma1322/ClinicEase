"use client"

import { Instagram, Linkedin, Twitter, Youtube } from 'lucide-react'

import React from 'react'

export default function Footer() {
    const footerNavs = [
        {
            label: "Company",
            items: [
                {
                    href: '/join/clinics',
                    name: 'Clinics'
                },
                {
                    href: 'javascript:void()',
                    name: 'Blog'
                },
            ],
        },
        {
            label: "Resources",
            items: [
                {
                    href: 'javascript:void()',
                    name: 'Contact'
                },
                {
                    href: 'javascript:void()',
                    name: 'Support'
                },
            ],
        },
        {
            label: "About",
            items: [
                {
                    href: 'javascript:void()',
                    name: 'Privacy'
                },
                {
                    href: 'javascript:void()',
                    name: 'About US'
                },
            ]
        }
    ];
    const socialLinks = [
        {
            title: "Linkedin",
            href: "www.linkedin.com",
            icon: Linkedin,
            color: "text-blue-600",
        },
        {
            title: "Twitter",
            href: "www.linkedin.com",
            icon: Twitter,
            color: "text-blue-400",
        },
        {
            title: "Instagram",
            href: "www.linkedin.com",
            icon: Instagram,
            color: "text-pink-400"
        },
        {
            title: "Youtube",
            href: "www.linkedin.com",
            icon: Youtube,
            color: "text-red-600"
        },
    ]
  return (
    <footer className="text-gray-400 px-4 py-5 max-w-screen-xl mx-auto md:px-8 mt-[2%]  dark:bg-black [mask-image:radial-gradient(black)">
            <div className="gap-6 justify-between md:flex">
                <div className="flex-1">
                    <div className="max-w-xs">
                        <h2 className='font-bold sm:text-3xl text-sky-400'>ClinicEase</h2>
                        <p className="leading-relaxed mt-2 text-[13px]">
                            From Screen To Clinic: Your Health In Your Hands
                        </p>
                    </div>
                </div>
                <div className="flex-1 mt-10 space-y-6 items-center justify-between sm:flex md:space-y-0 md:mt-0">
                    {
                        footerNavs.map((item, idx) => (
                            <ul
                                className="space-y-4"
                                key={idx}
                            >
                                <h4 className="text-gray-50 font-bold">
                                    { item.label }
                                </h4>
                                {
                                    item.items.map(((el, idx) => (
                                        <li key={idx}>
                                            <a 
                                                href={el.href}
                                                className="hover:underline hover:text-indigo-400"
                                            
                                            >
                                                { el.name }
                                            </a>
                                        </li>
                                    )))
                                }
                            </ul>
                        ))
                    }
                </div>
            </div>
            <div className="mt-8 py-6 border-t items-center justify-between sm:flex">
                <div className="mt-4 sm:mt-0">
                    &copy; {new Date().getFullYear()} ClinicEase All rights reserved.
                </div>
                <div className="mt-6 sm:mt-0">
                    <ul className="flex items-center space-x-4">
                        {
                            socialLinks.map((item,i)=>{
                                const Icon = item.icon
                              return(
                                <li key={i} 
                                className="w-10 h-10 border rounded-full flex items-center justify-center">
                                 <a href={item.href} className={item.color}>
                                    <Icon className='w-6 h-6'/>
                                 </a>
                                </li>
                              )  
                            })}
                    </ul>
                </div>
            </div>
        </footer>
  )
}

