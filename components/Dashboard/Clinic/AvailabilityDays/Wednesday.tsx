import { createAvailability, updateAvailabilityById } from '@/actions/registry';
import SubmitButton from '@/components/FormInputs/SubmitButton';
import { Button } from '@/components/ui/button';
import { ClinicProfile } from '@prisma/client';
import { Loader, Plus, X } from 'lucide-react';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import SelectedTimes from './SelectedTimes';
import { timesArray } from '@/config/constants';

export default function Wednesday({profile,day}:{profile:any,day:string}) {
  const availability = profile?.availablity || "";
  const initialData:string[] = profile?.availability[day] || [];
 
  const [selectedTimes, setSelectedTimes]=useState<string[]>(initialData);
  // console.log(selectedTimes);
  function handleAddTime(time:string){
    if (!selectedTimes.includes(time)){
      setSelectedTimes((prevTimes)=>[...prevTimes,time])
    }else {
      toast.error(`${time} Already Added!`);
    }
    
  }
  function handleRemoveTime(index:number){
    const updatedTimes = selectedTimes.filter((_,i)=>i!==index)
    setSelectedTimes(updatedTimes)
  }
  function handleAddAll(){
    setSelectedTimes([...timesArray]);
  }
  function clearAll(){
    setSelectedTimes([]);
  }
  async function handleSubmit() {
    setLoading(true)
   try {
    if (profile?.id && availability?.id){
      const data = {
        wednesday: selectedTimes,
        clinicProfileId: profile.id
      };
      await updateAvailabilityById(availability?.id,data);
      setLoading(false)
      toast.success("Settings Updated Successfully")
      // console.log(data);
     } else if (profile?.id){
      // console.log("Id not set")
      const data = {
        wednesday: selectedTimes,
        clinicProfileId: profile.id
      };
      await createAvailability(data);
      toast.success("Settings created Successfully")
      setLoading(false)
     } else {
      // console.log("Profile id not set")
     }
   } catch (error) {
    setLoading(false)
    console.log(error);
   }
  }
  const [loading, setLoading]=useState(false)
  return (
    <SelectedTimes 
    timesArray={timesArray}
    handleAddAll={handleAddAll}
    handleAddTime={handleAddTime}
    handleSubmit={handleSubmit}
    loading={loading}
    selectedTimes={selectedTimes}
    clearAll={clearAll}
    handleRemoveTime={handleRemoveTime}
    day={day}
    />
  )
}
