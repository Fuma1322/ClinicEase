"use client"

import { Instagram, Linkedin, Twitter, Youtube } from 'lucide-react'
import { title } from 'process'
import React from 'react'

export default function Footer() {
    const footerNavs = [
        {
            label: "Company",
            items: [
                {
                    href: 'javascript:void()',
                    name: 'Partners'
                },
                {
                    href: 'javascript:void()',
                    name: 'Blog'
                },
                {
                    href: 'javascript:void()',
                    name: 'Team'
                },
                {
                    href: 'javascript:void()',
                    name: 'Careers'
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
                {
                    href: 'javascript:void()',
                    name: 'Docs'
                },
                {
                    href: 'javascript:void()',
                    name: 'Pricing'
                },
            ],
        },
        {
            label: "About",
            items: [
                {
                    href: 'javascript:void()',
                    name: 'Terms'
                },
                {
                    href: 'javascript:void()',
                    name: 'License'
                },
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
        },
        {
            title: "Twitter",
            href: "www.linkedin.com",
            icon: Twitter,
        },
        {
            title: "Instagram",
            href: "www.linkedin.com",
            icon: Instagram,
        },
        {
            title: "Youtube",
            href: "www.linkedin.com",
            icon: Youtube,
        },
    ]
  return (
    <footer className="text-gray-500 bg-white px-4 py-5 max-w-screen-xl mx-auto md:px-8">
            <div className="gap-6 justify-between md:flex">
                <div className="flex-1">
                    <div className="max-w-xs">
                        <h2 className='font-bold sm:text-3xl text-sky-400'>ClinicEase</h2>
                        <p className="leading-relaxed mt-2 text-[13px]">
                            From Screen To Screen, Your Health Is In Your Hands
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
                                <h4 className="text-gray-800 font-medium">
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
                    &copy; 2024 ClinicEase All rights reserved.
                </div>
                <div className="mt-6 sm:mt-0">
                    <ul className="flex items-center space-x-4">
                        {
                            socialLinks.map((item,i)=>{
                                const Icon = item.icon
                              return(
                                <li key={i} 
                                className="w-10 h-10 border rounded-full flex items-center justify-center">
                                    <a href={item.href}>
                                    <Icon className='w-6 h-6' />
                                    </a>
                                </li>
                              )  
                            })}
                    </ul>
                </div>
            </div>
            <style jsx>{`
                .svg-icon path,
                .svg-icon polygon,
                .svg-icon rect {
                    fill: currentColor;
                }
            `}</style>
        </footer>
  )
}
