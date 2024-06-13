import RegisterForm from '@/components/Auth/RegisterForm'
import React from 'react'

export default function page() {
  return (
    <div className="min-h-screen py-8 mt-24">
        <div className="grid md:grid-cols-2 grid-cols-1 w-full max-w-5xl mx-auto
        bg-white border border-gray-200 
        rounded-lg shadow sm:p-8
         dark:bg-black dark:border-gray-700 overflow-hidden">
            <div className="hidden md:flex linear-bs">
                {/* IMAGE */}
            </div>
            <div className="">
                {/* FORM */}
                <RegisterForm />
            </div>
        </div>
    </div>
  )
}
