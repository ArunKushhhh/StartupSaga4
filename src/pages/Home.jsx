import React from 'react'
import Hero from '../sections/Hero'
import Testimonials from '../sections/Testimonials'

const Home = () => {
  return (
    <div className='flex flex-col gap-[150px]'>
      <Hero />
      <Testimonials />
    </div>
  )
}

export default Home
