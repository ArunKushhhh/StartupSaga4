import React from 'react'
import Ticket from '../components/Ticket'

const SponsorUs = () => {
  return (
    <div className="flex flex-col gap-24 justify-start items-center w-full min-h-[100vh]">
       <div className="uppercase text-center text-5xl md:text-6xl lg:text-9xl font-['shakuro'] text-white">
        Sponsor Us
      </div>
      <Ticket />
    </div>
  )
}

export default SponsorUs
