"use client"
import {type RegisterInputProps } from "@/types/types";
import Link from "next/link";
import { useForm } from "react-hook-form"
import TextInput from "../FormInputs/TextInput";
import SubmitButton from "../FormInputs/SubmitButton";
import { useState } from "react";
import { createUser } from "@/actions/users";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { StethoscopeIcon } from "lucide-react";


export default function AboutForm() { 
  const [isLoading, setIsLoading] = useState(false)
   const {
    register,
    handleSubmit,
    reset,
    formState:{errors},
  } = useForm<RegisterInputProps>();
  const router = useRouter();
  async function onSubmit (data: RegisterInputProps) {
    // console.log(data);
    setIsLoading(true);
  }
    return (
        <div className=" min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <StethoscopeIcon
              className="mx-auto h-16 w-auto"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-400">
              About Clinic
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <TextInput 
              label="Full Name" 
              register={register} 
              name="fullName" 
              errors={errors} 
              />
              <TextInput 
              label="Email Address" 
              register={register} 
              name="email"
              type="email"
              errors={errors} 
              />
              <TextInput 
              label="Phone Number" 
              register={register} 
              name="phone"
              type="tel"
              errors={errors} 
              />
              <div>
                <SubmitButton title="Register" isLoading={isLoading} loadingTitle={"Please Wait..."} />
              </div>
            </form>
          </div>
        </div>
    )
  }
  