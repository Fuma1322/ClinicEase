"use client"
import { type RegisterInputProps } from "@/types/types";
import Link from "next/link";
import {useForm} from "react-hook-form"
import TextInputs from "../FormInputs/TextInputs";
import SubmitButton from "../FormInputs/SubmitButton";
import { useState } from "react";
import { createUser } from "@/actions/users";
import { UserRole } from "@prisma/client"
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function RegisterForm({role="USER"}:{role?:UserRole}) {
  const [isLoading, setIsLoading] = useState(false)
  const {register, handleSubmit, reset, formState:{errors},
} = useForm<RegisterInputProps>();
const router = useRouter()

  async function onSubmit (data: RegisterInputProps){
    setIsLoading(true)
    data.role = role;
    try {
      const user = await createUser(data)
      if (user && user.status===200) {
        console.log("Usercreated sucessfully");
        reset();
        setIsLoading(false);
        toast.success("User created successfully")
        router.push(`/verify-account/${user.data?.id}`)
        console.log(user.data)
      } else {
        console.log(user.error)
      }
    }  catch (error) {
      console.log(error);
    }
  }
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="/logo.png"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-200">
            Create new account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
         <TextInputs  label="Full Name" register={register} name="fullName" errors={errors} placeholder={""} />
         <TextInputs  label="Email" register={register} name="email" type="email" errors={errors} placeholder={""} />
         <TextInputs  label="Phone Number" register={register} name="phone" type="tel" errors={errors} placeholder={""} />

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-200">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                 {...register("password", {required:true})}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
          
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.password && (
                <span className="text-red-600 text-sm">Password is required</span>
                )}
              </div>
            </div>

            <div>
              <SubmitButton title="Create Account" LoadingTitle="Creating please wait..." isLoading={isLoading} />
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-200">
            Already have Account?{' '}
            <Link href="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Login
            </Link>
          </p>
        </div>
      </div>
    )
  }
  