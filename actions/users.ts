"use server"

import { prismaClient } from "@/lib/db";
import { RegisterInputProps } from "@/types/types";
import { UserRole } from "@prisma/client";
import bcrypt from "bcrypt";

export async function createUser (formdata:RegisterInputProps) {
    const { fullName, email, phone, password, role } = formdata;
    try {
        const existingUser = await prismaClient.user.findUnique({
            where: {
              email,
            },
          });
          if (existingUser) {
            return {
              data: null,
              error: `User with this email ( ${email})  already exists in the Database`,
              status: 409,
            };
          }
          // Encrypt the Password =>bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);
    //Generate Token
    const generateToken = () => {
      const min = 100000; // Minimum 6-figure number
      const max = 999999; // Maximum 6-figure number
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    const userToken = generateToken();
    const newUser = await prismaClient.user.create({
      data: {
        name: fullName,
        email,
        phone,
        password: hashedPassword,
        role,
        token: userToken,
      },
    });
    return {
        data: newUser,
        error: null,
        status: 200,
      };
        // return data;
    } catch (error) {
        console.log(error)
        return {
            error: "Something went wrong"
        }
    }
    
}