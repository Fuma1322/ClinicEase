"use client"
import { ReactNode, createContext, useContext, useState } from "react";

//Wrap the entire app with the provider
interface IOnBoardingContextData {
    trackingNumber: String;
    setTrackingNumber: (value:string)=>void
    clinicProfileId: String;
    setClinicProfileId:(value:string)=>void
}
const initialData = {
    trackingNumber: "",
    clinicProfileId: "",
    setTrackingNumber:()=>{},
    setClinicProfileId:()=>{}
};

const OnBoardingContext = createContext<IOnBoardingContextData>(initialData)

//Creating and exporting the context provider
export function OnboardingContextProvider({children}:{children:ReactNode}){
    const [trackingNumber, setTrackingNumber]=useState("")
    const [clinicProfileId, setClinicProfileId]=useState("")
    const contextValues ={
        trackingNumber, 
        setTrackingNumber,
        clinicProfileId, 
        setClinicProfileId,
    };
    return <OnBoardingContext.Provider value={contextValues}>
        {children}
    </OnBoardingContext.Provider>
}
//Creating and exporting usecontext
export function useOnboardingContext(){

    return useContext(OnBoardingContext)
}
export default OnBoardingContext