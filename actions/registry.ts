"use server"

import { prismaClient } from "@/lib/db";
import { BasicInfoProps, RegisterInputProps } from "@/types/types";
import bcrypt from "bcrypt";
import { Resend } from "resend";
import EmailTemplate from "@/components/Emails/emailstemplate";

export async function createClinicProfile (formdata: any) {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { 
      address, 
      clinicName, 
      email, 
      page, 
      phone, 
      trackingNumber, 
      userId
    } = formdata;
    try {
    const newProfile = await prismaClient.clinicProfile.create({
      data: {
      address, 
      clinicName, 
      email, 
      page, 
      phone, 
      trackingNumber, 
      userId
      },
    });
    console.log(newProfile);
    return newProfile
        // return data;
    } catch (error) {
        console.log(error)
        return {
            error: "Something went wrong"
        }
    }
    
}
