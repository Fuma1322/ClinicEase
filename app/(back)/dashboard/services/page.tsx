import Appointments from '@/components/Dashboard/Appointments/Appointments'
import DisplayPannel from '@/components/Dashboard/Clinic/DisplayPannel'
import ListPannel from '@/components/Dashboard/Clinic/ListPannel'
import NewButton from '@/components/Dashboard/Clinic/NewButton'
import PannelHeader from '@/components/Dashboard/Clinic/PannelHeader'
import ServiceForm from '@/components/Dashboard/Settings/ServiceForm'
import { Calendar, Icon, LayoutGridIcon } from 'lucide-react'
import React from 'react'

export default function page() {
  return (
    <div>
      
       <div className="grid grid-cols-12">
       <div className="col-span-4 py-3 border-r border-gray-100">
        <PannelHeader title='Services' count={12} icon={LayoutGridIcon}/>
       <div className="px-3">
       <ListPannel/>
       </div>
       </div>
        <div className="col-span-8">
            <div className="py-2 px-4 border-b border-gray-200 flex items-center justify-end">
                <div className="flex items-center gap-4">
                    <NewButton title='New Services' href='/dashboard/services/new'/>
      </div>
    </div>
          <ServiceForm/>
        </div>
       </div>
        
    </div>
  )
}
