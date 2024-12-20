import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='bg-cover bg-center bg-[url(/Users/dheerajjoshi/Programming/Uber/Frontend/src/assets/images/startup/startup.jpeg)] h-screen flex flex-col justify-between w-full relative'>
      <div className='p-8'>
        <img 
          className='w-16 transform hover:scale-105 transition-all duration-300' 
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png'
          alt='Uber Logo' 
        />
      </div>
      
      <div className='backdrop-blur-md bg-white/90 py-8 px-6 shadow-[0_-8px_30px_rgb(0,0,0,0.12)] transition-all duration-300'>
        <h2 className='text-3xl font-bold font-uber-move-text mb-2 tracking-tight'>
          Get started with <span className='text-black'>Uber</span>
        </h2>
        <Link 
          to='/login'
          className='flex items-center justify-center w-full font-uber-move-text bg-black text-white py-4 rounded-lg mt-6 text-lg font-medium hover:bg-[#333333] transform transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg active:translate-y-[0px]'
        >
          Continue
        </Link>
      </div>
    </div>
  )
}

export default Home