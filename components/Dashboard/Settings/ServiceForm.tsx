"use client"

import { BasicInfoProps } from "@/types/types";
import { useForm } from "react-hook-form"
import TextInput from "@/components/FormInputs/TextInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import { useState } from "react";
import ImageInput from "@/components/FormInputs/ImageInput";

export type ServiceProps = {
  title: string;
  imageUrl: string;
  slug:string;
}
export default function ServiceForm() {
  async function onSubmit(data: ServiceProps) {}
  const [imageUrl,setImageUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
   const {
    register,
    handleSubmit,
    reset,
    formState:{errors},
  } = useForm<ServiceProps>()
    return (
        <div className=" min-h-full flex-1 flex-col justify-center px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-4xl font-bold leading-9 tracking-tight text-gray-400">
              Create Services
            </h2>
            <p className="text-balance text-muted-foreground justify-center flex py-2">
              Fill all the details
            </p>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm grid-cols-2">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <TextInput 
              label="Service Title" 
              register={register} 
              name="title" 
              errors={errors} 
              />
              <ImageInput 
                label ="Profile Image"
                imageUrl = {imageUrl}
                setImageUrl = {setImageUrl}
                endpoint = "serviceImage"
                />
              
              <div className="py-4">
                <SubmitButton title="Create Service" isLoading={isLoading} loadingTitle={"Saving, Please Wait..."} />
              </div>
            </form>
          </div>
        </div>
    )
  }
  