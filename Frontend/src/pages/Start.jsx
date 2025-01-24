import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import TypeWriter from '../components/TypeWriter';
const Start = () => {
  return (
    <div className='bg-cover bg-center bg-[url("/src/assets/images/startup/startup.jpeg")] h-screen flex flex-col justify-between w-full relative overflow-hidden'>
      {/* Gradient Overlay */}
      <div className='absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 animate-gradient' />
      
      {/* Animated Background Overlay */}
      <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/30 via-transparent to-transparent blur-3xl animate-pulse-slow' />

      {/* Logo Section */}
      <motion.div 
        className='p-8 relative z-10'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <img 
          className='w-16 transform hover:scale-105 transition-all duration-300 filter drop-shadow-lg' 
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png'
          alt='Uber Logo' 
        />
      </motion.div>
      
      {/* Bottom Card */}
      <motion.div 
        className='backdrop-blur-md bg-white/90 py-8 px-6 shadow-[0_-8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 relative z-10'
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <h2 className='text-3xl font-bold font-uber-move-text mb-2 tracking-tight'>
          <TypeWriter text="Get started with Uber" />
        </h2>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <Link 
            to='/login'
            className='flex items-center justify-center w-full font-uber-move-text bg-black text-white py-4 rounded-lg mt-6 text-lg font-medium hover:bg-[#333333] transform transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg active:translate-y-[0px] relative overflow-hidden group'
          >
            <span className='relative z-10'>Continue</span>
            <div className='absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Start;