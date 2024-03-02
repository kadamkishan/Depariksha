import React from 'react'
import logoImage from '../assets/logo_image.png';
import {LogIn,UserPlus }from 'lucide-react';


const Navbar = () => {
  return (

    <div className='flex justify-around  w-screen'>
      <div className='w-[15%]'>
        <img src={logoImage} alt="logoImage" />
      </div>

      <div className='flex p-4 font-mono font-medium gap-[3%]'>
        <div>HOME</div>
        <div>FEATURES</div>
        <div>EXAMS</div>
        <div>TESTIMONIALS</div>
        <div>CONTACT</div>
        <div className='flex gap-x-2'>
          <div >{<LogIn className='h-[18px] mt-[0.7]' />}</div>
          <div>LOGIN</div>
        </div>
     
        <div className='flex gap-x-2'>
          <div >{<UserPlus className='h-[18px] mt-[0.7]' />}</div>
          <div>REGISTER</div>
        </div>
      </div>
    </div>

  )
}

export default Navbar


