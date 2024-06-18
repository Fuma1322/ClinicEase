"use client"

import { BasicInfoProps, type RegisterInputProps } from "@/types/types";
import { useForm } from "react-hook-form"
import TextInput from "../FormInputs/TextInput";
import SubmitButton from "../FormInputs/SubmitButton";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { TextArea } from "../FormInputs/TextArea";
import ImageInput from "../FormInputs/ImageInput";


export default function BasicInfo({page, title, description}:{page:string, title:string, description:string}) {
  const [profileImage,setprofileImage] = useState("https://utfs.io/f/acf62ede-cc6c-4797-b0ee-3fae55d8d844-3vabb.png")
  const [isLoading, setIsLoading] = useState(false)
   const {
    register,
    handleSubmit,
    reset,
    formState:{errors},
  } = useForm<BasicInfoProps>();
  const router = useRouter();
  async function onSubmit (data: BasicInfoProps) {
    data.page = page;
    console.log(data);
    setIsLoading(true);
  }
    return (
        <div className=" min-h-full flex-1 flex-col justify-center px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-4xl font-bold leading-9 tracking-tight text-gray-400">
              {title}
            </h2>
            <p className="text-balance text-muted-foreground justify-center flex py-2">
              {description}
            </p>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm grid-cols-2">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <TextInput 
              label="Clinic Name" 
              register={register} 
              name="clinicName" 
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
              name="phone number"
              type="tel"
              errors={errors} 
              />
              <TextInput 
              label="Address" 
              register={register} 
              name="address"
              errors={errors} 
              />
              <ImageInput 
                label ="Profile Image"
                imageUrl = {profileImage}
                setImageUrl = {setprofileImage}
                endpoint = "clinicProfilePicture"
                />
              
              <div className="py-4">
                <SubmitButton title="Save & Continue" isLoading={isLoading} loadingTitle={"Saving, Please Wait..."} />
              </div>
            </form>
          </div>
        </div>
    )
  }
  