import { Loader } from 'lucide-react';
import React from 'react'

type SubmitButtonProps = {
title: string;
buttonType?: "button" | "submit" | "reset" | undefined
isLoading: boolean;
LoadingTitle: string;
}
export default function SubmitButton({title, buttonType="submit", isLoading=false, LoadingTitle}: SubmitButtonProps) {
  return (
   <>
   {isLoading ?(
     <button
     type={buttonType}
     disabled
     className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
   >
     <Loader className='w-4 h-4 mr-2 flex-shrink-0 animate-spin'/>{LoadingTitle}
   </button>

   ):(
    <button
    type={buttonType}
    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 items-center"
  >
    {title}
  </button>
   )}
   </>
  )
}
