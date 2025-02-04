import React from 'react'
import Button from './Button'

const EventContent = ({ event }) => {
  return (
    <div className="md:w-1/2 flex flex-col justify-center items-start gap-8 px-8">
    <div className="font-['shakuro'] text-5xl">{event.title}</div>
    <div className="text-3xl font-semibold font-['shakuro']">
      {event.date}
    </div>
    <div>{event.description}</div>
    <Button title={event.buttonText} bg={"bg-violet-50"} />
  </div>
  )
}

export default EventContent
