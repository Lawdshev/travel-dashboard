import React from 'react'
import { RiFlightTakeoffFill } from "react-icons/ri";

function EmptyState({icon, buttonText} : any) {
  return (
    <div className='w-full bg-[white] p-8 flex flex-col gap-2 items-center justify-center'>
        {icon}
        <p className='text-sm font-medium'>No Request</p>
        <button className='md:w-[200px] p-4 bg-[#0073e6] text-[white] rounded-md text-sm font-bold'>{buttonText}</button>
    </div>
  )
}

export default EmptyState