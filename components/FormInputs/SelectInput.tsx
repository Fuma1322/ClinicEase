import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { boolean } from "zod"

// type SelectInputProps = {
//     label: string
//     register:any;
//     name: string;
//     errors:any;
//     options: string;
//     className?: string;
//     multiple?: boolean;
// };
// export type SelectOption = {
//     value: string;
//     label: string;
// };

 export function SelectInput() {
  return (
    <Select>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="Select Your Primary Specializations" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Mabote Filter Clinic</SelectLabel>
          <SelectItem value="est">Dentist</SelectItem>
          <SelectItem value="est">Mid Wife</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
