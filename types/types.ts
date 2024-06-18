import { UserRole } from "@prisma/client";

export type ServiceProps = { title: string; image: string; slug: string };

export type RegisterInputProps = {
    fullName: string;
    email: string;
    phone: string;
    password: string;
    role: any;
}

export type LoginInputProps = {
    email: string;
    password: string;
}

export type BasicInfoProps = {
    clinicName: string;
    email: string;
    phone: string;
    address: string;
    profilePicture?: string;
    page: string;
}