import RegistrySteps from '@/components/Registry/RegistrySteps'
import React from 'react'

export default function page({params:{id}}:{params:{id:string}}) {
  return (
    <div>
        <RegistrySteps id={id} />
    </div>
  )
}
