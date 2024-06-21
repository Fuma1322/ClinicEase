"use client"

import {ClinicDetailsProps } from "@/types/types";
import { useForm } from "react-hook-form"
import TextInput from "../FormInputs/TextInput";
import SubmitButton from "../FormInputs/SubmitButton";
import { useState } from "react";
import { useRouter } from "next/navigation";
import  RadioGroupDemo  from "../FormInputs/RadioGroup";
import { Checkbox } from "../ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import { useOnboardingContext } from "@/context/context";
import { StepFormprops } from "./BasicInfoForm";


export default function ClinicDetils({
  page, 
  title, 
  description,
userId,
  formId
}: StepFormprops) {
  const [isLoading, setIsLoading] = useState(false)
   const {
    register,
    handleSubmit,
    reset,
    formState:{errors},
  } = useForm<ClinicDetailsProps>();
  const {trackingNumber,clinicProfileId} = useOnboardingContext();
  const router = useRouter();
  async function onSubmit (data: ClinicDetailsProps) {
    data.page = page;
    console.log(data);
    // setIsLoading(true);
  }
    return (
      <div className="w-full">
      <div className="text-center border-gray pb-4">
        <h2 className="mt-10 text-center text-4xl font-bold leading-9 tracking-tight text-gray-400">
          {title}
        </h2>
        <p className="text-balance text-muted-foreground justify-center flex py-2">
          {description}
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="mx-auto py-4 px-4">
          <div className="grid gap-4 grid-cols-2">
          <TextInput 
          label="What Is The Duration For Your Meetings" 
          register={register} 
          name="meetingDuration"
          errors={errors}
          className="col-span-full"
          />
          <RadioGroupDemo 
          name="availability" 
          register={register} 
          title="Availability" 
          errors={errors}
          />

          <div className="col-span-full">
            <h2>Define Your Weekly Availability Below:</h2>
            <div className=" border py-6 px-4 border-gray items-center justify-between grid grid-cols-1 md:grid-cols-3 gap-4">
              {/*Check Box*/}
              <div className="">
                <div className="flex items-center space-x-2">
                  <Checkbox id="day" />
                  <label
                    htmlFor="day"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Monday
                  </label>
                </div>
              </div>
              {/* Time */}
               <div className="grid grid-cols-2 gap-4">
               <div className="grid grid-cols-3 gap-2">
                  <Select>
                    <SelectTrigger id="month">
                      <SelectValue placeholder="Month" />
                    </SelectTrigger>
                    <SelectContent>
                    {Array.from({ length: 12 }, (_, i) => (
                        <SelectItem 
                        key={i} 
                        value={`${(i + 1).toString().padStart(2,"0")}`}>
                        {(i + 1).toString().padStart(2,"0")}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger id="year">
                      <SelectValue placeholder="Year" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 59 }, (_, i) => (
                        <SelectItem 
                        key={i} 
                        value={`${(i + 1.).toString().padStart(2,"0")}`}>
                          {(i + 1).toString().padStart(2,"0")}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger id="year">
                      <SelectValue placeholder="Year" />
                    </SelectTrigger>
                    <SelectContent>
                    <SelectItem value="3">AM</SelectItem>
                      <SelectItem value="4">PM</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <Select>
                    <SelectTrigger id="month">
                      <SelectValue placeholder="Month" />
                    </SelectTrigger>
                    <SelectContent>
                    {Array.from({ length: 12 }, (_, i) => (
                        <SelectItem 
                        key={i} 
                        value={`${(i + 1).toString().padStart(2,"0")}`}>
                        {(i + 1).toString().padStart(2,"0")}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger id="year">
                      <SelectValue placeholder="Year" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 59 }, (_, i) => (
                        <SelectItem 
                        key={i} 
                        value={`${(i + 1.).toString().padStart(2,"0")}`}>
                          {(i + 1).toString().padStart(2,"0")}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger id="year">
                      <SelectValue placeholder="Year" />
                    </SelectTrigger>
                    <SelectContent>
                    <SelectItem value="3">AM</SelectItem>
                      <SelectItem value="4">PM</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              {/* Add Window */}
              <div className="">
                <Button variant="ghost">
                  <Plus className="h4 w-4 flex-shrink-0"/>
                  Add Window
                </Button>
              </div>
            </div>
          </div>
          <div className="py-4 flex justify-center items-center">
            <SubmitButton title="Save & Continue" isLoading={isLoading} loadingTitle={"Saving, Please Wait..."} />
          </div>
          </div>
        </form>
    </div>
    )
  }
