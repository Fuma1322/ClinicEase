import { type } from 'os';
import React from 'react'
import { Label } from '../ui/label';

type TextInputsProps = {
    label: string;
    register: any;
    name: string;
    errors: any;
    type?: string;
};
export default function TextInputs({label, register, name, errors, type="text"}:TextInputsProps) {
  <div className="grid gap-2">
            
              
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
              </div>
  return (
    <div className="grid gap-2">
              <Label htmlFor={`${name}`}> {label}</Label>
              <div className="mt-2">
                <input
                {...register(`${name}`, {required:true})}
                  id={`${name}`}
                  name={`${name}`}
                  type={type}
                  autoComplete="name"
                
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors[`${name}`] && (
                <span className="text-red-600 text-sm">{`${label}`} is required</span>
                )}
              </div>
            </div>
  )
}
