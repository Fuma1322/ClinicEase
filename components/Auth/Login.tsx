"use client"
import Link from "next/link";
import TextInputs from "../FormInputs/TextInputs";
import { LoginInputProps } from "@/types/types";
import { useState } from "react";
import { useForm } from "react-hook-form";
import SubmitButton from "../FormInputs/SubmitButton";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { Alert } from "flowbite-react";
import { HiInformationCircle } from "react-icons/hi";
import { Button } from "../ui/button";
import Image from "next/image";

export default function Login() {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
  const [showNotification, setShowNotification] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<LoginInputProps>();

  async function onSubmit(data: LoginInputProps) {
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
      toast.error("It seems something is wrong with your Network");
    }
  }
    function handleSubmit(onSubmit: any): import("react").FormEventHandler<HTMLFormElement> | undefined {
        throw new Error("Function not implemented.")
    }

  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email below to login to your account
            </p>
          </div>
          <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
            {showNotification && (
            <Alert color="failure" icon={HiInformationCircle}>
              <span className="font-medium">Sign-in error!</span> Please Check
              your credentials
            </Alert>
          )}
            <div className="grid gap-2">
            
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="/forgot-password"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input id="password" type="password" required />
            </div>
            <SubmitButton title={""} isLoading={false} LoadingTitle={"Logging you in please wait"}/>
            <Button variant="outline" className="w-full">
              Login with Google
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="#" className="underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <Image
          src="/placeholder.svg"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  )
}
