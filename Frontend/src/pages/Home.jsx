import React from 'react'
import { Link } from 'react-router-dom'

const home = () => {
  return (
    <div className='  bg-cover bg-center bg-[url(/Users/dheerajjoshi/Programming/Uber/Frontend/src/assets/images/startup/startup.jpeg)] h-screen pt-8 flex justify-between flex-col w-full bg-red-400'>
        <img className='w-16 ml-10 m-8' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png' />
        <div className='bg-white py-5 pb-7 px-5'>
            <h2 className='text-2xl font-bold font-uber-move-text'>Get started with </h2>          
              <Link to='/login'className='flex items-center justify-center w-full font-uber-move-text bg-black text-white py-3 rounded mt-5'>Continue</Link>
        </div>
    </div>
  )
}

export default home