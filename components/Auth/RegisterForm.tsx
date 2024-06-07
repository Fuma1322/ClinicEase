"use client"
import {type RegisterInputProps } from "@/types/types";
import Link from "next/link";
import { useForm } from "react-hook-form"
import TextInput from "../FormInputs/TextInput";
import SubmitButton from "../FormInputs/SubmitButton";
import { useState } from "react";
import { createUser } from "@/actions/users";
import { UserRole } from "@prisma/client";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";


export default function RegisterForm({role="USER"}:{role?:UserRole}) {
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

    data.role = role;
    try {
      const user = await createUser(data)
      if (user&&user.status===200){
        console.log("User Created Successfully")
        reset();
        setIsLoading(false);
        toast.success("User Created Successfully");
        router.push(`/verify-account/${user.data?.id}`)
        console.log(user.data);
        
      } else{
        console.log(user.error)
      }
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  }
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-16 w-auto"
              src="/logo.png"
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-400">
              Create New Account
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
              <TextInput 
              label="Password" 
              register={register} 
              name="password"
              type="password"
              errors={errors} 
              />
  
              <div>
                <SubmitButton title="Register" isLoading={isLoading} loadingTitle={"Please Wait..."} />
              </div>
            </form>
  
            <p className="mt-10 text-center text-sm text-gray-500">
              Already Have Account?{' '}
              <Link
               href="/login" 
               className="font-semibold leading-6 text-sky-400 hover:text-indigo-500">
                Log In
                </Link>
            </p>
          </div>
        </div>
    )
  }
  