"use client"

import { BasicInfoProps, type RegisterInputProps } from "@/types/types";
import { useForm } from "react-hook-form"
import TextInput from "../FormInputs/TextInput";
import SubmitButton from "../FormInputs/SubmitButton";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { TextArea } from "../FormInputs/TextArea";
import ImageInput from "../FormInputs/ImageInput";
import RadioGroup from "../FormInputs/RadioGroup";


export default function ClinicDetils({page, title, description}:{page:string, title:string, description:string}) {
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
              label="Operating Hours" 
              register={register} 
              name="operatinghours" 
              errors={errors} 
              />
              <TextInput 
              label="Services Offered" 
              register={register} 
              name="servicesoffered"
              errors={errors} 
              />
              <RadioGroup />
              <div className="py-4">
                <SubmitButton title="Save & Continue" isLoading={isLoading} loadingTitle={"Saving, Please Wait..."} />
              </div>
            </form>
          </div>
        </div>
    )
  }
  