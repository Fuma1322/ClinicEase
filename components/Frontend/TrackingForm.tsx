"use client";
 
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { HiInformationCircle } from "react-icons/hi";
import { Alert } from "flowbite-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Loader } from "lucide-react";
import { updateUserById } from "@/actions/users";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { UserRole } from "@prisma/client";
import { Input } from "../ui/input";
import Link from "next/link";
 
const FormSchema = z.object({
  trackingNumber: z.string().min(2, {
    message: "Tracking Number must be at least 10 characters.",
  }),
});

 
export default function TrackingForm({
  trackingNumber,
  id,
  role
}: {
  trackingNumber: number | undefined;
  id: string;
  role: UserRole | undefined
}) {
  const [loading, setLoading] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [trackingSuccessful, setTrackingSuccessful] = useState(true);
  const [userId, setUserId] = useState("");
  const [page, setPage] = useState("");

  const router = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      trackingNumber: "",
    },
  })
 
  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setLoading(true);
    try {
      await updateUserById(id);
      setLoading(false);
      // reset();
      toast.success("Account Verified");
      if (role === "CLINIC") {
        router.push(`/registry/${id}`);
      } else {
        router.push("/login");
      }
      //registry page or onboarding
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }
 
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full mr-3 space-y-6">
        {showNotification && (
          <Alert color="failure" icon={HiInformationCircle}>
            <span className="font-medium">Wrong Traking Number!</span> Please Check the
            Tracking number and Enter again
          </Alert>
        )}
        {
          trackingSuccessful&&(
           <Button asChild>
             <Link href={`/registry/${userId}?page=${page}`}>Click here to Resume</Link>
           </Button>
          )
        }
       <FormField
          control={form.control}
          name="trackingNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tracking Number</FormLabel>
              <FormControl>
                <Input placeholder="eg. NKBNMPTRPP" {...field} />
              </FormControl>
              <FormDescription>
                Enter Tracking Number
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
 
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}