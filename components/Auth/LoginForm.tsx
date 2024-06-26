"use client"
import { LoginInputProps, RegisterInputProps } from "@/types/types";
import Link from "next/link";
import { useForm } from "react-hook-form";
import TextInput from "../FormInputs/TextInput";
import { useState } from "react";
import SubmitButton from "../FormInputs/SubmitButton";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { HiInformationCircle } from "react-icons/hi";
import { Alert } from "flowbite-react";
import { StethoscopeIcon } from "lucide-react";

export default function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [showNotifications, setShowNotification] = useState(false);
  const router = useRouter();
   const {
    register,
    handleSubmit,
    reset,
    formState:{errors},
  } = useForm<LoginInputProps>();
  async function onSubmit (data: LoginInputProps) {
    try {
      setIsLoading(true);
      console.log("Attempting to sign in with credentials:", data);
      const loginData = await signIn("credentials", {
        ...data,
        redirect: false,
      });
      console.log("SignIn response:", loginData);
      if (loginData?.error) {
        setIsLoading(false);
        toast.error("Sign-in error: Check your credentials");
        setShowNotification(true);
      } else {
        // Sign-in was successful
        setShowNotification(false);
        reset();
        setIsLoading(false);
        toast.success("Login Successful");
        router.push("/dashboard");
      }
    } catch (error) {
      setIsLoading(false);
      console.error("Network Error:", error);
      toast.error("Its seems something is wrong with your Network");
    }
  }
  
    return ( 
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <StethoscopeIcon
              className="mx-auto h-16 w-auto text-red-600"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-400">
              Sign in to your account
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {showNotifications && (
            <Alert color="failure" icon={HiInformationCircle}>
              <span className="font-medium">Sign-in error!</span> Please Check
              your credentials
            </Alert>
          )}
            <TextInput 
              label="Email Address" 
              register={register} 
              name="email"
              type="email"
              errors={errors} 
              />
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-400">
                    Password
                  </label>
                  <div className="text-sm">
                    <a href="#" className="font-semibold text-sky-400 hover:text-indigo-500">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                  {...register("password",{required:true})}
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                   {errors["password"] && <span className="text-red-500 text-sm">Password Is Required</span>}
                </div>
              </div>
              <div>
                <SubmitButton title="Sign In" isLoading={isLoading} loadingTitle={"Please Wait..."} />
              </div>
            </form>
            <p className="mt-10 text-center text-sm text-gray-500">
              Don&#39;t have Account?{' '}
              <Link
               href="/register" 
               className="font-semibold leading-6 text-sky-400 hover:text-indigo-500">
                Register
                </Link>
            </p>
          </div>
        </div>
    );
  }